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
   previousFlag:boolean;
   nextFlag:boolean;
   current:any;
   chosenList=[];
   userList:any;
   makeRequest(){
    
    this.http.get(this.sampleUrl).subscribe(userList=>{
      this.userList=userList;
     
     
    });
     
     
  
  }

  show(){
    this.userList.forEach(user => {
      if(user.choose==true){
        this.chosenList.push(user.id);
      }
  });
  
  if(this.chosenList.length!=0)
  {
    
    this.route.navigate(['editdetails',this.chosenList.toString()]);
    
  }
  else{
    this.errorFlag=true;
    
   }
}
/*
  editUser(id){
    this.route.navigate(['editdetails',id]);
  }
  */
 /*
  show(){
   this.chosenList=[];
 // this.route.navigate(['editdetails',id]);
    this.userList.forEach(user => {
        if(user.choose==true){
          this.chosenList.push(user);
        }
       
    });
    if(this.chosenList.length!=0){
      this.boxShow=true;
      this.errorFlag=false;
     
      if(this.chosenList.length==1){
        this.current=this.chosenList[this.i];
        this.previousFlag=true;
        this.nextFlag=true;

      }
      else{                                                         //(this.chosenList.length>1)
        this.current=this.chosenList[0];
        this.previousFlag=true;
        this.nextFlag=false;
      }
    }
    else{
     this.errorFlag=true;
     this.boxShow=false;
    }

 }

  prev(){
    if(this.current==this.chosenList[1]){
      this.i-=1;
      this.current=this.chosenList[this.i];
      this.nextFlag=false;
      this.previousFlag=true;
    }
    else{
    
      this.i-=1;
      this.current=this.chosenList[this.i];
      this.nextFlag=false;
        
    }
  }

 
 next(){
  
  if(this.current==this.chosenList[this.chosenList.length-2]){
    this.nextFlag=true;
    this.i++;
    this.current=this.chosenList[this.i];
    this.previousFlag=false;
  }
  else{                                                   //  (this.current!=this.chosenList[this.chosenList.length-2]){
    this.i++;
    this.current=this.chosenList[this.i];
    this.previousFlag=false;
  }
  
 }
*/
  ngOnInit() {
    this.makeRequest();
  }

}
