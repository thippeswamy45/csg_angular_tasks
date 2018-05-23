import { Component, OnInit,Inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';  //for animations  of angular material


import { Router } from '@angular/Router';
import { Observable } from 'rxjs/Observable';
import{GetDataService} from '../get-data.service';
import {User} from '../model/customUserDetails';
import { MatDialog,MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList:any;
  showForm:boolean;
  
  userDetails:any;
  selectedValue:any;
  showFormFlag:boolean;
  arrayIndex:any;
  sampleUrl="https://jsonplaceholder.typicode.com/users"; 
  albumsUrl="https://jsonplaceholder.typicode.com/albums?userId=";
  constructor(public dialog: MatDialog,private http:HttpClient,private dataService:GetDataService,private route:Router) {
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
    //this.route.navigate(["userdata",id]);
    this.albumsUrl+=id;
    this.dataService.getAlbumsDetails(this.albumsUrl).subscribe(data=>{
      this.userDetails=data;

      console.log(this.userDetails);
    
    });
    //this.showFormFlag=true;

    let dialogRef = this.dialog.open(UserFormComponent, {
      width: '1000px',
      height:'500px',
      
      data: { userDetails : "name"}
      
    });

    
  }

  ngOnInit() {
    this.makeRequest();
  }

}

  @Component({
    selector: '../user-form/user-form.component',
    templateUrl: '../user-form/user-form.component.html',
    styleUrls: ['../user-form/user-form.component.css']
  })
  export class UserFormComponent{

    constructor(public dialogRef: MatDialogRef<UserFormComponent>,@Inject(MAT_DIALOG_DATA) public data: any) {
        console.log(this.data);
     }

   

  }  



  

