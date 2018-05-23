import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toKg'
})
export class ToKgPipe implements PipeTransform {

  transform(value: any): any {
    return value/1000;
  }

}
