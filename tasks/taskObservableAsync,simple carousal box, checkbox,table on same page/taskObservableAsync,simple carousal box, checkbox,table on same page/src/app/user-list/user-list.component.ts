import { Component, OnInit,Pipe } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/Router';
import { Observable } from 'rxjs/Observable';
import{GetDataService} from '../get-data.service';
import {User} from '../model/customUserDetails';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  sampleUrl="https://jsonplaceholder.typicode.com/users"; 
  constructor(private http:HttpClient,private dataService:GetDataService,private route:Router) {
   }
   i=0;
   boxShow:boolean;
   errorFlag:boolean;
   previousFlag=true;
   nextFlag=true;
   currentId:any;
   chosenList=[];
   userList:any;
   presentData:any;
   makeRequestAll(){
    
    this.http.get(this.sampleUrl).subscribe(userList=>{
      this.userList=userList;
     
     
    });
 
  }
  makeRequest(id:any){
    this.sampleUrl="https://jsonplaceholder.typicode.com/users/"; 
    this.sampleUrl+=id;
    this.http.get(this.sampleUrl).subscribe(data=>{
      this.presentData=data;
      this.currentId=this.presentData.id;
    });
    

  }

 
/*
  editUser(id){
    this.route.navigate(['editdetails',id]);
  }
  */
 
  show(){
   this.chosenList=[];
    this.userList.forEach(user => {
        if(user.choose==true){
          this.chosenList.push(user.id);
        }
       
    });
    if(this.chosenList.length!=0){
   
      this.errorFlag=false;
      this.currentId=this.chosenList[0];
      this.makeRequest(this.currentId);
      this.boxShow=true;
      if(this.chosenList.length!=1){                              //(this.chosenList.length>1)
        this.nextFlag=false;
      }
 
    }
    else{
     this.errorFlag=true;
     this.boxShow=false;
    }

  }

 prev(){
  this.nextFlag=false;
  this.i-=1;
  this.currentId=this.chosenList[this.i];
  this.makeRequest(this.currentId);

  if(this.chosenList.indexOf(this.currentId)==0){    
    
    this.previousFlag=true;
  }

}


 next(){
  this.i+=1;
  this.currentId=this.chosenList[this.i];
  this.makeRequest(this.currentId);
  this.previousFlag=false;

  if(this.chosenList.indexOf(this.currentId)==this.chosenList.length-1){
    this.nextFlag=true;    
  }
 
}

  ngOnInit() {
    this.makeRequestAll();
  }

}
