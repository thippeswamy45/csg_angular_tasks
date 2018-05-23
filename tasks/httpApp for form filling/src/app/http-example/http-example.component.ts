import { Component, OnInit, Pipe, PipeTransform, ViewChild } from '@angular/core';
import {Observable} from 'rxjs/observable';
import { HttpClient } from '@angular/common/http';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-http-example',
  templateUrl: './http-example.component.html',
  styleUrls: ['./http-example.component.css']
})
export class HttpExampleComponent implements OnInit {
  userList:any;
 
  @ViewChild("FormComponent") child;
  showForm:boolean;
  showTable:boolean;
  arrayIndex:any;
  
  constructor(private http:HttpClient,private SampleServiceData:SampleService) { }
  sampleUrl="https://jsonplaceholder.typicode.com/users";

  makeRequest(){
    
    this.http.get(this.sampleUrl).subscribe(userList=>{
      this.userList=userList;
     
    });

  }
  

  editForm(id:any){
    for(let i=0;i<this.userList.length;i++){
      if(id==this.userList[i].id){
        this.showForm=true;
        this.showTable=true;
        this.arrayIndex=i;
        
       
      }
    }  
  }

  takeValue(val:any){
    this.userList[this.arrayIndex]=val;
    console.log(this.userList[this.arrayIndex]);
    this.showForm=false;
    this.showTable=false;

   
  }

  deleteElement(id:any){
    for(let i=0;i<this.userList.length;i++){
      if(id==this.userList[i].id){
        this.userList.splice(i,1);
        
      }
    }  
  }
  
 
  ngOnInit()
  {
    
    this.makeRequest();
   
  }

}
