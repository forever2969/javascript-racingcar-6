import { Console, Random } from '@woowacourse/mission-utils';
import GameStart from '../Model/GameStart.js';

class RaceView{
  constructor(){
    this.gameStart = new GameStart();
    this.racerForwardNumberStorage = [];
  }

  //각 racer가 얼마나 전진했는지 number로 나타나는 array 반환
  async oneTimeEndJudgment(){
    return this.racerForwardNumberStorage;
  }

  //레이싱 진행을 위한 View Function
  async raceProgressView(times,advanceBool,splitRacerNames) {
    //각 racer가 얼마나 전진했는지 number로 나타나는 array를 게임 시작 할때 0으로 사람 수 만큼 초기화
    if(this.racerForwardNumberStorage.length === 0){
      this.racerForwardNumberStorage = new Array(splitRacerNames.length).fill(0);
    }

    //time에 해당하는 racer name출력
    process.stdout.write(`${splitRacerNames[times]} : `)
    
    //현재까지 누적된 전진 횟수 출력
    for(let count = 0; count<this.racerForwardNumberStorage[times]; count++){
      process.stdout.write("-");
    }

    //현재 time에 전진을 한다면, "-"한개 더 출력
    if(advanceBool){
      this.racerForwardNumberStorage[times] ++;
      process.stdout.write("-");
    }
    Console.print("");

    //racer들의 전진 출력이 모두 완료되었을 때 개행 출력
    if(splitRacerNames.length-1 === times){
      Console.print("");
    }
  }

  //최종 우승자를 판별하여 출력하는 Function
  async raceResultView(chosenWinnerRacersNames){
    const printRacerNames = chosenWinnerRacersNames.map((member) => member).join(",");

    Console.print(`최종 우승자 : ${printRacerNames}`);
  }

  getRacerForwardNumberStorage(){
    return this.racerForwardNumberStorage;
  }
}

export default RaceView;