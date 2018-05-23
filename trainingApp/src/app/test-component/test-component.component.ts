import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  carList:string[];
  constructor() { 
     this.carList = ["Skoda", "Benz", "Maruthi"];
  }
  getVal(val:any){
    console.log(val);
  }
  submitForm(val1:any,val2:any){
    console.log(val1+val2);
  }

  ngOnInit() {
  }

}
