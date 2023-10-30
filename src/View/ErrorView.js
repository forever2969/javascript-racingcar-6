  import { Console, Random } from '@woowacourse/mission-utils';

  class ErrorView{
    static async nameLengthErrorView(nameLengthErrorFlag){
      if(nameLengthErrorFlag > 0){
        throw new Error("[ERROR] 이름의 길이는 5글자 이하입니다.");
      }
    }
  }

  export default ErrorView;