import { Component,Input, OnInit,EventEmitter,Output } from '@angular/core';
import { NgForm,Validators } from '@angular/forms';



@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  alert_string="! this field is required";
  
  json:string;
 
  
 
  alert_role = false;
  
 @Input() userDetails:{};
 @Output() updateEvent = new EventEmitter<object>();
  
  
  
  
  submitForm(form:NgForm){
   
    let required_flag=true;
    this.alert_role=false;

   
    //form.reset();
    
    this.updateEvent.emit(this.userDetails);
   
  }


  constructor() { }

  ngOnInit() {
  }

}
