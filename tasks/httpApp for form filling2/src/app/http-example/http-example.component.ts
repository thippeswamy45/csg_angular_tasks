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
 
  
  showForm:boolean;
//  showTable:boolean;
  
  individualUserDetails:any;
  constructor(private http:HttpClient,private SampleServiceData:SampleService) { }
  sampleUrl="https://jsonplaceholder.typicode.com/users"; 

  makeRequest(){
    
    this.http.get(this.sampleUrl).subscribe(userLists=>{
      this.userList=userLists;
     
    });

  }
  

  editForm(id:any){
    this.userList.forEach(user => {
      if(id==user.id){
       
        this.individualUserDetails=this.SampleServiceData.getDetails(id).subscribe(userDetails=>{
          this.individualUserDetails=userDetails;
          this.showForm=true;
        });
      /*  this.http.get(this.sampleUrl+"/"+id).subscribe(userList=>{
          this.individualUserDetails=userList;
          console.log(this.individualUserDetails);
        });*/
        
       
       // this.showTable=true;
      }
    });
      
        
        
       
     
   
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
