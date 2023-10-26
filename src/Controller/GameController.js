import { Console, Random } from '@woowacourse/mission-utils';
import GameStart from '../Model/GameStart.js';

class GameController{
  constructor(){
    this.gameStart = new GameStart();
    this.splitRacerNames = [];
  }

  
  async play() {
    await this.gameStart.gameStartMsg();
    this.splitRacerNames = await this.gameStart.racerNamesFormatter();
    Console.print(this.splitRacerNames);
  }
}

export default GameController;
