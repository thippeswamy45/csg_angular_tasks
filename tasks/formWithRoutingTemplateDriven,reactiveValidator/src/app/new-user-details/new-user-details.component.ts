import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-new-user-details',
  templateUrl: './new-user-details.component.html',
  styleUrls: ['./new-user-details.component.css']
})
export class NewUserDetailsComponent implements OnInit {
  @Output() dataPushEvent =new EventEmitter();
  
  newUserForm : FormGroup;

  constructor() { }

  ngOnInit() {
    this.newUserForm= new FormGroup({
      "id":new FormControl(null,Validators.required),
      "fn":new FormControl(null,Validators.required),
      "ln":new FormControl(null,Validators.required),
      "addr":new FormControl(null),
      "pn":new FormControl(null,Validators.required),
      "email":new FormControl(null,[Validators.required,Validators.email])
    });

  }

  submitForm(){
   // console.log(this.newUserForm.value.id);
    this.dataPushEvent.emit(this.newUserForm);
  }

}
