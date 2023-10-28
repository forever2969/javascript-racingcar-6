import { Console, Random } from '@woowacourse/mission-utils';

class GameStart {
  constructor(){
    this.racerNames = "";
    this.gameCount = 0;
  }

  //게임 시작 메시지 출력과 함께 사용자 입력을 받는 함수
  async gameStartMsg() {
    this.racerNames = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    const trimRacerNames = this.racerNames.trim();
    const splitRacerNames = trimRacerNames.split(",");

    //여기서 부터 ErrorView, ErrorController를 만들어서 splitRacerNames를 념겨서
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
