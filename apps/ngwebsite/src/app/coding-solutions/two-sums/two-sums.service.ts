import { Injectable } from '@angular/core';

@Injectable()
export class TwoSumsService {

  generateArrayOfInteger(limit: number): any {
    const nums = [];
    for (let cnt = 1; cnt <= limit; cnt++) {
      nums.push(cnt);
    }

    const ranNums = [];
    let i = nums.length, j = 0;

    while (i--) {
      j = Math.floor(Math.random() * (i + 1));
      ranNums.push(nums[j]);
      nums.splice(j, 1);
    }
    return ranNums;
  }

  twoSums(nums: number[], target_num: number): number[][] {
    const indexnum = [];
    for (let x = 0; x < nums.length; x++) {
      const secondNumber = target_num - nums[x];
      const secondNumberIndex = nums.indexOf(secondNumber);
      if (secondNumberIndex > -1 && secondNumberIndex > x) {
        indexnum.push([nums[x], secondNumber]);
      }
    }
    return indexnum;
  }
}
