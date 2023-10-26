import { Console, Random } from '@woowacourse/mission-utils';

class RacerAdvanceNumber{
  static async chooseAdvanceOrNot(){
    const randomNumber = await Random.pickNumberInRange(0,9);
    if(randomNumber >= 4){
      return true;
    }
    return false;
  }
}

export default RacerAdvanceNumber;