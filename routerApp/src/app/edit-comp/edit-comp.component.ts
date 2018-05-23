import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-comp',
  templateUrl: './edit-comp.component.html',
  styleUrls: ['./edit-comp.component.css']
})
export class EditCompComponent implements OnInit {
  ids=["001","002","003"];
  constructor() { }

  ngOnInit() {
  }

}
