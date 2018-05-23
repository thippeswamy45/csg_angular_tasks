import { Component, OnInit, Input, Output,EventEmitter,Pipe } from '@angular/core';
import { NgForm,Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  displayFlag:boolean;
  @Input() userDetails:object;
  @Output() updateEvent = new EventEmitter<object>();
  //@Output() displayEvent = new EventEmitter<object>();
  constructor() { }

  submitForm(form:NgForm){
   
    let required_flag=true;
   // form.reset();
    this.updateEvent.emit(this.userDetails);
   
  }
  display(){
    this.displayFlag=true;
    console.log(this.userDetails);
  }




  ngOnInit() {
  }

}
