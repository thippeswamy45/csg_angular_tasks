import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-comp',
  template: `<app-child-comp [childVariable]="parentJson"></app-child-comp>`,
  styleUrls: ['./parent-comp.component.css']
})
export class ParentCompComponent implements OnInit {
  parentJson={"UserDetails":[{"E_id":"001","FN":"Robert","LN":"Roy","pn":"9001082018","address":"Mysore","Email":"robert@gmail.com"},{"E_id":"002","FN":"Komal","LN":"Roy","pn":"9001082018","address":"hubli","Email":"komal@gmail.com"},{"E_id":"003","FN":"Ranjan","LN":"Roy","pn":"9001082018","address":"bangalore","Email":"ranjan@gmail.com"}]};
  
  
  constructor() { 
    console.log(this.parentJson);
  }

  ngOnInit() {
  }

}
