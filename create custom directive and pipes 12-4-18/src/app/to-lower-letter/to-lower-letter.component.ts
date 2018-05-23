import { Component, OnInit,Pipe } from '@angular/core';
import { LowerCasePipe } from '@angular/common';
@Component({
  selector: 'app-to-lower-letter',
  templateUrl: './to-lower-letter.component.html',
  styleUrls: ['./to-lower-letter.component.css']
})
export class ToLowerLetterComponent implements OnInit {

  constructor() { }
  textData="";
  ngOnInit() {
  }

}
