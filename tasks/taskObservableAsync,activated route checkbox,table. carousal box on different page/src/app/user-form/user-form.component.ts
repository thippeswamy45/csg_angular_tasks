
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/Router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  
  sampleUrl="https://jsonplaceholder.typicode.com/users/"; 
  userId:any;
  userDetails:any;
  displayFlag:any;
  
  i=0;
  boxShow:boolean;
  errorFlag:boolean;
  previousFlag=true;
  nextFlag:boolean;
  currentId:string;
  chosenList:string;
  selectedIdList: any[];
  userList:string;
  presentData:any;
  constructor(private http:HttpClient,private route:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
   // let id=parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
  //  this.userId=id;
   this.chosenList=this.activatedRoute.snapshot.paramMap.get('id');
   this.boxShow=true;
   
    this.selectedIdList = this.chosenList.split(',');
  //  this.userId=id;
    this.makeRequest(this.selectedIdList[0]);
  }


  makeRequest(id:any){
    this.sampleUrl="https://jsonplaceholder.typicode.com/users/"; 
    this.sampleUrl+=id;
    this.http.get(this.sampleUrl).subscribe(data=>{
      this.presentData=data;
      this.currentId=this.presentData.id;
    });
    

  }
 


  prev(){
    this.nextFlag=false;
    this.i-=1;
    this.currentId=this.selectedIdList[this.i];
    this.makeRequest(this.currentId);
  
    if(this.selectedIdList.indexOf(this.currentId)==0){    
      
      this.previousFlag=true;
    }
  
  }

 
   next(){
    this.i+=1;
    this.currentId=this.selectedIdList[this.i];
    this.makeRequest(this.currentId);
    this.previousFlag=false;
  
    if(this.selectedIdList.indexOf(this.currentId)==this.selectedIdList.length-1){
      this.nextFlag=true;    
    }
   
  }
}
