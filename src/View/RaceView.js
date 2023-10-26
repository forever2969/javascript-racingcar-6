import { Console, Random } from '@woowacourse/mission-utils';
import GameStart from '../Model/GameStart.js';

class RaceView{
  constructor(){
    this.gameStart = new GameStart();
    this.racerForwardNumberStorage = [0,0,0];
  }

  async raceProgressView(times,advanceBool,splitRacerNames) {
    process.stdout.write(`${splitRacerNames[times]} : `)
    

    for(let count = 0; count<this.racerForwardNumberStorage[times]; count++){
      process.stdout.write("-");
    }

    if(advanceBool){
      this.racerForwardNumberStorage[times] += 1;
      process.stdout.write("-");
    }
    Console.print("");
  }

  getRacerForwardNumberStorage(){
    return this.racerForwardNumberStorage;
  }
}

export default RaceView;