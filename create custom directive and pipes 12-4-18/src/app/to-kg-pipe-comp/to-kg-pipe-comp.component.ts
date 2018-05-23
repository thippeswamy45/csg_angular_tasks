import { Component, OnInit } from '@angular/core';
import {ToKgPipe} from '../to-kg.pipe';
@Component({
  selector: 'app-to-kg-pipe-comp',
  templateUrl: './to-kg-pipe-comp.component.html',
  styleUrls: ['./to-kg-pipe-comp.component.css']
})
export class ToKgPipeCompComponent implements OnInit {

  constructor() { }
  gramValue=0;
  ngOnInit() {
  }

}
