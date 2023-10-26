import { Console, Random } from '@woowacourse/mission-utils';

class GameStart {
  constructor(){
    this.racerNames = "";
    this.gameCount = 0;
  }

  async gameStartMsg() {
    this.racerNames = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    this.gameCount = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
  }
  
  async racerNamesFormatter(){
    const trimRacerNames = this.racerNames.trim();
    const splitRacerNames = trimRacerNames.split(",");

    return splitRacerNames;
  }
}

export default GameStart;
