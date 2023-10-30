import { Console, Random } from '@woowacourse/mission-utils';
import ErrorController from '../Controller/ErrorController.js';

class GameStart {
  constructor(){
    this.racerNames = "";
    this.gameCount = 0;
    this.errorController = new ErrorController();
  }

  //게임 시작 메시지 출력과 함께 사용자 입력을 받는 함수
  async gameStartMsg() {
    this.racerNames = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    const trimRacerNames = this.racerNames.trim();
    const splitRacerNames = trimRacerNames.split(",");

    await this.errorController.nameErrorDetect(splitRacerNames); //이름의 Array를 이름 길이 Error를 판단하는 함수로 전달
    
    this.gameCount = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
  }
  
  //자동차 레이서의 이름을 ","을 기준으로 구분하며 Array 생성 후 반환
  async racerNamesFormatter(){
    const trimRacerNames = this.racerNames.trim();
    const splitRacerNames = trimRacerNames.split(",");

    return splitRacerNames;
  }
}

export default GameStart;
