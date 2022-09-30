import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time',
})
export class TimePipe implements PipeTransform {
  transform(value: Date, ...args: unknown[]): unknown {
    const dateNow: Date = new Date();

    return dateNow.getTime();
  }
}
