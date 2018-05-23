import { Component, OnInit,ElementRef,Directive,ViewChild,Pipe } from '@angular/core';
import {  DateMmddyyyyazPipe  } from '../date-mmddyyyyaz.pipe';
import { DatePipe } from '@angular/common';
import * as moment from 'moment'; // moment.js file for date
 declare var jQuery: any;
@Component({
  selector: 'app-date-pipe-comp',
  templateUrl: './date-pipe-comp.component.html',
  styleUrls: ['./date-pipe-comp.component.css']
})
export class DatePipeCompComponent implements OnInit {
    dateValue:"";
    displaydate=false;
    @ViewChild('inputDate') inputDate: ElementRef;

  constructor() {
    
   }
   

   displayDate(){
    this.displaydate=true;
    this.dateValue=this.inputDate.nativeElement.value;
    
    console.log(this.inputDate.nativeElement.value);
    
   }

  ngOnInit() {
    jQuery(this.inputDate.nativeElement).datepicker();
  }

}
