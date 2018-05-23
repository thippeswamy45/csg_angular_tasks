import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NewUserDetailsComponent } from '../new-user-details/new-user-details.component';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit {
 
  data={"UserDetails":[{"E_id":"001","FN":"Robert","LN":"Roy","pn":"9001082018","address":"Mysore","Email":"robert@gmail.com"},{"E_id":"002","FN":"Komal","LN":"Roy","pn":"8881082018","address":"hubli","Email":"komal@gmail.com"},{"E_id":"003","FN":"Ranjan","LN":"Roy","pn":"7771082018","address":"bangalore","Email":"ranjan@gmail.com"}]};
  
  json=this.data;
  
  constructor() {
    
    
   }
   
  showTable:boolean;
  edit:boolean;
  new:boolean;
  arrayIndex:number;
  //arrayLength=this.json.UserDetails.length;
  newButton:boolean;
  
  deleteElement(id:any){
    for(let i=0;i<this.json.UserDetails.length;i++){
      if(id==this.json.UserDetails[i].E_id){
        this.json.UserDetails.splice(i,1);
        
      }
    }  
  }
 
  editForm(id:any){
    for(let i=0;i<this.json.UserDetails.length;i++){
      if(id==this.json.UserDetails[i].E_id){
        this.edit=true;
        this.showTable=true;
        this.arrayIndex=i;
        this.newButton=true;
       // console.log(this.json.UserDetails[i].E_id);
      }
    }  
  }

  takeValue(val:any){
    this.json.UserDetails[this.arrayIndex]=val;
    console.log(this.json.UserDetails[this.arrayIndex]);
    this.edit=false;
    this.showTable=false;
    this.newButton=false;
  }
  newData(){
    this.new=true;
    this.showTable=true;
    this.newButton=true;
  }
  @ViewChild("NewUserDetailsComponent") child:NewUserDetailsComponent;
   
  addRow(rowData:any){
   
    this.json.UserDetails.push({"E_id":rowData.value.id,"FN":rowData.value.fn,"LN":rowData.value.ln,"pn":rowData.value.pn,"address":rowData.value.addr,"Email":rowData.value.email});
    this.new=false;
   console.log(this.json.UserDetails);
    this.showTable=false;
    this.newButton=false;
  }

  ngOnInit() {
  }

}
