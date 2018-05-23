import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/Router';
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

  constructor(private http:HttpClient,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    let id=parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.userId=id;
    this.makeRequest(this.userId);
  }


  makeRequest(id:any){
    this.sampleUrl+=id;
    this.http.get(this.sampleUrl).subscribe(data=>{
      this.userDetails=data;
    });

  }
  display(){
    this.displayFlag=true;
    console.log(this.userDetails);
  }

  
}
