import { Component, OnInit,Pipe ,Inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';  //for animations  of angular material
//import {MatTableDataSource} from '@angular/material';// for angular material table 
import {MatTableModule} from '@angular/material/table';  // for angular  table 
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
  data$:Observable<Array<User>>;
  userList:any;
  showForm:boolean;
  userone:object;
  showFormFlag:boolean;
  arrayIndex:any;
  sampleUrl="https://jsonplaceholder.typicode.com/users"; 
  constructor(private http:HttpClient,private dataService:GetDataService) {
   }
  

  columnNames = ['id','name','email','username','actions'];
   makeRequest(){
    
    this.data$=this.dataService.getDetails();
       

    }
    
/* 



deleteElement(id:any){
  for(let i=0;i<this.userList.length;i++){
    if(id==this.userList[i].id){
      this.userList.splice(i,1);
      
    }
  }  
}

takeValue(val:any){
  this.data[this.arrayIndex]=val;
 // console.log(this.data[this.arrayIndex]);
  this.showFormFlag=false;

 
}

 editForm(id:any){
  for(let i=0;i<this.data.length;i++){
    if(id==this.data[i].id){
      this.arrayIndex=i;
      this.showFormFlag=true;
    //  this.openDialog();
    }
  }  
}
cancel(flag:any){
  this.showFormFlag=flag;
}
/*

openDialog(): void {
  let dialogRef = this.dialog.open(UserFormComponent, {
    width: '500px',
    
  });

  
}
*/
  ngOnInit() {
    this.makeRequest();
  }

}

