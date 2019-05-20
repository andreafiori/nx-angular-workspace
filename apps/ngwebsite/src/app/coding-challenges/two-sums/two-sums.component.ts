import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { TwoSumsService } from './two-sums.service';

@Component({
  selector: 'app-two-sums',
  templateUrl: './two-sums.component.html',
  styleUrls: ['./two-sums.component.scss']
})
export class TwoSumsComponent {

  arrayElements: number[] = [];
  arrayElmentsTotal = 10;
  targetNum = 12;
  solutions: number[][] = [];
  optionsForm: FormGroup;

  /**
   * Initialize array elements and first solution
   *
   * @param service
   */
  constructor(private service: TwoSumsService, private fb: FormBuilder) {
    this.initialize();
  
    this.optionsForm = this.fb.group({
      targeNumber: [
        null,
        Validators.compose([Validators.required, Validators.minLength(1)])
      ],
      numelements: [
        null,
        Validators.compose([Validators.required, Validators.minLength(1)])
      ]
    });

    this.optionsForm.setValue({
      targeNumber: this.targetNum,
      numelements: this.arrayElmentsTotal
    });
  }

  /**
   * Initialize array elements and first solution
   */
  initialize(): void {
    this._initializeArray();
    this._calculateSolutions();
  }

  /**
   * Update target number and re-calculate solution
   *
   * @param n number
   * @returns number
   */
  updateTarget(n: number): number {
    this.targetNum = n;
    this._calculateSolutions();
    return this.targetNum;
  }

  /**
   * Update total number of array elements
   *
   * @param n number
   * @returns number
   */
  updateArrayElementsTotal(n: number): number {
    this.arrayElmentsTotal = n;
    this._initializeArray();
    this._calculateSolutions();
    return this.arrayElmentsTotal;
  }

  /**
   * Check if a number is among the solution array of arrays (numbers)
   *
   * @param element number
   * @returns boolean
   */
  checkActiveArrayElement(element: number): boolean {
    if (this.solutions.length === 0) {
      return false;
    }
    for (let i = 0; i < this.solutions.length; i++) {
      for (let j = 0; j < this.solutions[i].length; j++) {
        if (element === this.solutions[i][j]) {
          return true;
        }
      }
    }
    return false;
  }

  submitForm(value: any): boolean {
    if (value.targeNumber !== null && value.targeNumber !== this.targetNum) {
      this.updateTarget(value.targeNumber);
    }
    if (value.numelements !== null && value.numelements !== this.arrayElmentsTotal) {
      this.updateArrayElementsTotal(value.numelements);
    }
    return true;
  }

  /**
   * Initialize array element generating an array of numbers
   */
  private _initializeArray(): Array<any> {
    this.arrayElements = this.service.generateArrayOfInteger(this.arrayElmentsTotal);
    return this.arrayElements;
  }

  /**
   * Calculate solutions
   *
   * @returns number[][]
   */
  private _calculateSolutions(): number[][] {
    this.solutions = this.service.twoSums(this.arrayElements, this.targetNum);
    return this.solutions;
  }
}
