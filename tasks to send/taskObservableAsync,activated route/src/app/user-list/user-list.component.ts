import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{GetDataService} from '../get-data.service';
import {User} from '../model/customUserDetails';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/Router';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  sampleUrl="https://jsonplaceholder.typicode.com/users"; 
  constructor(private http:HttpClient,private dataService:GetDataService,private route:Router) {
   }

   userList$:Observable<Array<User>>;
   
   makeRequest(){
    
    this.userList$=this.dataService.getDetails();
     
     
  
  }

  editUser(id){
    this.route.navigate(['editdetails',id]);
  }
 /*
  deleteElement(id:any){
    this.userList$.subscribe(result => {
    result.forEach(user => {
     if(id==user.id){
      console.log(result);
        result.splice(result.indexOf(user),1);
        console.log(result);
       
     }
      });
     
      });
    }
 //   });
    //for(let i=0;i<this.userList.length;i++){
     // if(id==this.userList[i].id){
    //    this.userList.splice(i,1);
        
     // }
   // }  
  */

  ngOnInit() {
    this.makeRequest();
  }

}
