import { Component, OnInit } from '@angular/core';
import { SampleService } from '../sample.service';
@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.css']
})
export class TestCompComponent implements OnInit {
  carList:any[];
  constructor(private SampleDataService:SampleService) { }

  ngOnInit() {

    this.carList=this.SampleDataService.myData();
  }

}
