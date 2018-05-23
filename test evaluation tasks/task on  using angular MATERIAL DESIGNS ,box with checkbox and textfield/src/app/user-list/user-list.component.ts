import { Component, OnInit,Inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';  //for animations  of angular material
//import {MatTableDataSource} from '@angular/material';// for angular material table 
import {MatTableModule,MatListItem,MatListModule} from '@angular/material';  // for angular  table 
import { Router } from '@angular/Router';
import { Observable } from 'rxjs/Observable';
import{GetDataService} from '../get-data.service';
import { NgForm,Validators,FormControl,FormGroup,ReactiveFormsModule,FormControlName } from '@angular/forms';
import {User} from '../model/customUserDetails';
//import { MatDialog,MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {UserFormComponent} from '../user-form/user-form.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList:any;
  showForm:boolean;
  userone:object;
  showFormFlag:boolean;
  arrayIndex:any;
  sampleUrl="https://jsonplaceholder.typicode.com/users"; 
  constructor(private dataService:GetDataService) {
   }
   userDetails=new User();
   textdataformcontrol=new FormControl("",[Validators.required]); 
   
   submitForm() {
    this.userDetails.taskListArray.push(this.userDetails.textdata);
    this.userDetails.textdata="";
    
  }
  ngOnInit() {
   this.userDetails.textdata="";
  }

}

