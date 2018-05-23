import { Component, OnInit,Pipe ,Inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';  //for animations  of angular material
//import {MatTableDataSource} from '@angular/material';// for angular material table 

import { Router } from '@angular/Router';
import { Observable } from 'rxjs/Observable';
import{GetDataService} from '../get-data.service';
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
  selectedValue:any;
  showFormFlag:boolean;
  arrayIndex:any;
  sampleUrl="https://jsonplaceholder.typicode.com/users"; 
  constructor(private http:HttpClient,private dataService:GetDataService,private route:Router) {
   }
  data$:Observable<Array<User>>;
  ShowUsersFlag:boolean;
  dropDownItems=["users","posts","comments","albums","photos","todos"];
  columnNames = ['id','name','email','username','actions'];
  makeRequest(){
  
    this.data$=this.dataService.getDetails(this.sampleUrl);

  }
  showUsers(){
    if(this.selectedValue=="users"){
      this.ShowUsersFlag=true;
    }
  }
 
  showAlbums(id:any){
    this.route.navigate(["userdata",id]);
    this.showFormFlag=true;
  }
  ngOnInit() {
    this.makeRequest();
  }

}

