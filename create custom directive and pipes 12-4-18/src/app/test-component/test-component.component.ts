import { Component, OnInit } from '@angular/core';
import { NotShowDirective } from '../not-show.directive';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  displayFlag=true;


  displayPara(){
    this.displayFlag=!this.displayFlag;
  }

  ngOnInit() {
    
  }

}
