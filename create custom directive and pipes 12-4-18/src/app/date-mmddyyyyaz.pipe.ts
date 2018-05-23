import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment'; // moment.js file for date
@Pipe({
  name: 'dateMmddyyyyaz'
})
export class DateMmddyyyyazPipe implements PipeTransform {
  
  
  transform(value: any): any {
   
    return  moment(value).format('MM/DD/YYYY A Z');
  }

}
