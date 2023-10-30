import { Console, Random } from '@woowacourse/mission-utils';
import ErrorView from '../View/ErrorView.js';

class ErrorController{
  constructor(){
    this.nameLengthErrorFlag = 0;
  }
  async nameErrorDetect(splitRacerNames){
    splitRacerNames.forEach((name)=>{
      if(name.length > 5){
        this.nameLengthErrorFlag++;
      }
    })
    await ErrorView.nameLengthErrorView(this.nameLengthErrorFlag);

  }
}

export default ErrorController;