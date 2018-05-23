
import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/Router';
import { HttpClient } from '@angular/common/http';
import { NgForm,Validators,FormControl,FormGroup,ReactiveFormsModule,FormControlName } from '@angular/forms';
import {User} from '../model/customUserDetails';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

 // @Input() userDetails:object;
 // @Output() updateEvent = new EventEmitter<object>();
  
  @Input() userDetails=new User();
  @Output() updateFormEvent=new EventEmitter<object>();
  @Output() cancelEvent=new EventEmitter<boolean>();

  idformcontrol=new FormControl("",[Validators.required]);
  nameformcontrol=new FormControl("",[Validators.required]);
  usernameformcontrol=new FormControl("",[Validators.required]);
  emailformcontrol=new FormControl("",[Validators.required,Validators.email]);
  

  constructor(private http:HttpClient) { }

  submitForm(){
   
    let required_flag=true;
   // form.reset();
    this.updateFormEvent.emit(this.userDetails);
  // console.log(this.userDetails);
   
  }
  cancel(){
    this.cancelEvent.emit(false);  
  }

  ngOnInit() {
   // this.userDetails.id="12345";
   
   
  }


  

  
}
