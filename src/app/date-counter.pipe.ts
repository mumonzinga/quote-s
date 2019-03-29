import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCounter'
})
export class DateCounterPipe implements PipeTransform {


  transform(value: any): number {
    const today: any = new Date();

    const difference = Math.abs(today - value);
    const secondsPerDay = 86400;

    // tslint:disable-next-line:prefer-const
    let dateDifferenceSeconds = difference * 0.001;

    const dateCount = Math.round(dateDifferenceSeconds / secondsPerDay);


    if (dateCount >= 1) {
      return dateCount - 1;
    } else {
      return 0;
    }
  }

}
