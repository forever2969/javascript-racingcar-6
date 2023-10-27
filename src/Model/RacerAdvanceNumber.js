import { Console, Random } from '@woowacourse/mission-utils';

class RacerAdvanceNumber{
  static async chooseAdvanceOrNot(){
    const randomNumber = await Random.pickNumberInRange(0,9);
    if(randomNumber >= 4){
      return true;
    }
    return false;
  }

  static async oneTimeEndJudgment(racerAdvanceResult){
    const maxAdvance = Math.max(...racerAdvanceResult);
    const maxAdvanceIndex = [];
    racerAdvanceResult.forEach((advance,index)=>{
      if(advance === maxAdvance){
        maxAdvanceIndex.push(index);
      }
    })

    return maxAdvanceIndex;
  }
}

export default RacerAdvanceNumber;