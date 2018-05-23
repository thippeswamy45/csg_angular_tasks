import { Component, OnInit } from '@angular/core';
import { BackgroundColorDirective } from '../background-color.directive';
@Component({
  selector: 'app-component-order-list',
  templateUrl: './component-order-list.component.html',
 
  styleUrls: ['./component-order-list.component.css']
})
export class ComponentOrderListComponent implements OnInit {
  
  whiteFlag:boolean;
  cityList:string[];
  constructor() { 
    this.cityList=["bangalore","mysore","hospet","manglore"];
  }
    
  
  ngOnInit() {
    
  }

}
