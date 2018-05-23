import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-parent',
  templateUrl: './output-parent.component.html',
  styleUrls: ['./output-parent.component.css']
})
export class OutputParentComponent implements OnInit {

  message:string;
  constructor() { }

  ngOnInit() {
  }

  receiveMessage(value) {
    console.log(value);
    this.message = value
  }

}
