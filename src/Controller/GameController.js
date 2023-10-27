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
    this.splitRacerNames = await this.gameStart.racerNamesFormatter();
    this.numberOfRacers = this.splitRacerNames.length;

    for(let totalTimes=0; totalTimes<this.gameStart.gameCount; totalTimes++){
      for(let times=0; times<this.numberOfRacers; times++){
        await this.racerAdvanceControll()
        this.raceView.raceProgressView(times,this.advanceBool,this.splitRacerNames);
      }
    }

    this.racerAdvanceResult = await this.raceView.oneTimeEndJudgment();
    this.chosenWinnerRacers = await RacerAdvanceNumber.oneTimeEndJudgment(this.racerAdvanceResult);
    await this.chooseWinnerRacers();

    this.raceView.raceResultView(this.chosenWinnerRacersNames);
  }
}

export default GameController;
