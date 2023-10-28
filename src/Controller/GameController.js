import { Console, Random } from '@woowacourse/mission-utils';
import GameStart from '../Model/GameStart.js';
import RacerAdvanceNumber from '../Model/RacerAdvanceNumber.js';
import RaceView from '../View/RaceView.js';

class GameController{
  constructor(){
    this.gameStart = new GameStart();
    this.raceView = new RaceView();
    this.splitRacerNames = [];
    this.racerAdvanceResult = [];
    this.chosenWinnerRacers = [];
    this.chosenWinnerRacersNames = [];
    this.advanceBool = false;
    this.numberOfRacers = 0;
  }

  async racerAdvanceControll(){
    this.advanceBool = await RacerAdvanceNumber.chooseAdvanceOrNot();
  }

  async chooseWinnerRacers(){
    this.chosenWinnerRacersNames = this.chosenWinnerRacers.map(index => this.splitRacerNames[index]);
  }
  
  async play() {
    await this.gameStart.gameStartMsg();

    this.splitRacerNames = await this.gameStart.racerNamesFormatter(); //레이서의 Array 받아오기
    this.numberOfRacers = this.splitRacerNames.length;

    //1중 for에서는 총 게임이 돌아가는 횟수(사용자 입력)만큼 반복
    for(let totalTimes=0; totalTimes<this.gameStart.gameCount; totalTimes++){
      //2중 for에서는 레이서의 명 수 만큼 반복
      for(let times=0; times<this.numberOfRacers; times++){
        await this.racerAdvanceControll(); //랜덤 값에 의한 전진 여부 Boolean값 생성
        this.raceView.raceProgressView(times,this.advanceBool,this.splitRacerNames); //Boolean값을 전송하여 해당 time에 전진할 racer의 전진 여부 View 호출
      }
    }

    this.racerAdvanceResult = await this.raceView.oneTimeEndJudgment(); //for문이 종료 되었으면 게임이 끝났다는 의미. 우승자 판별
    this.chosenWinnerRacers = await RacerAdvanceNumber.oneTimeEndJudgment(this.racerAdvanceResult); //우승자를 Array로 추출
    await this.chooseWinnerRacers(); //추출한 Array를 String으로 변환

    this.raceView.raceResultView(this.chosenWinnerRacersNames); //추출한 Winner String을 출력하기 위해 View로 전송
  }
}

export default GameController;
