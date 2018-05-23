import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-order-list',
  templateUrl: './component-order-list.component.html',
  styleUrls: ['./component-order-list.component.css']
})
export class ComponentOrderListComponent implements OnInit {
  
  
  cityList:string[];
  constructor() { 
    this.cityList=["bangalore","mysore","hospet","manglore"];
  }
    
  ngOnInit() {
    
  }

}
