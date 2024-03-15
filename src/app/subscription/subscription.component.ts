import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Month } from '../enums/months.enum';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss'],
})
export class SubscriptionComponent {

  public topics: string[] = ['Arabic', 'Islamic', 'English', 'History', 'Sports'];
  public months: string[] = Object.keys(Month);
  public categories: string[] = ['Arabic', 'Islamic', 'English', 'History', 'Sports']


  constructor(public platform: Platform) { }

  /**
   * @returns {number}
   * @param {number} index
   * @description track by index
   */
  public trackByIndex(index: number): number {
    return index;
  }

  /**
   * @public
   * @returns {number[]}
   * @param {number} length
   * @description number generator for ngFor
   */
  public generateNumbersArray(length: number): number[] {
    return Array.from({ length }, (_: any, index: number): number => index + 1);
  }
}
