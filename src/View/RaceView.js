import { Console, Random } from '@woowacourse/mission-utils';
import GameStart from '../Model/GameStart.js';

class RaceView{
  constructor(){
    this.gameStart = new GameStart();
    this.racerForwardNumberStorage = [];
  }

  async oneTimeEndJudgment(){
    return this.racerForwardNumberStorage;
  }

  async raceProgressView(times,advanceBool,splitRacerNames) {
    if(this.racerForwardNumberStorage.length === 0){
      this.racerForwardNumberStorage = new Array(splitRacerNames.length).fill(0);
    }

    process.stdout.write(`${splitRacerNames[times]} : `)
    

    for(let count = 0; count<this.racerForwardNumberStorage[times]; count++){
      process.stdout.write("-");
    }

    if(advanceBool){
      this.racerForwardNumberStorage[times] ++;
      process.stdout.write("-");
    }
    Console.print("");

    if(splitRacerNames.length-1 === times){
      Console.print("");
    }
  }

  async raceResultView(chosenWinnerRacersNames){
    const printRacerNames = chosenWinnerRacersNames.map((member) => member).join(",");

    Console.print(`최종 우승자 : ${printRacerNames}`);
  }

  getRacerForwardNumberStorage(){
    return this.racerForwardNumberStorage;
  }
}

export default RaceView;