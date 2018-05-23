import { Component, OnInit } from '@angular/core';
import { NgForm,Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  alert_string="! this field is required";
  
  roles=["select one","programmer","developer","tester","support"];
  checkLanguages=[];
  lang=["java","c#","js"];
  flag = false;
  jsObject:any;
  json:string;
 
  
 
  alert_role = false;
  
  userDetails={
    
    fn:"",
    ln:"",
    role:this.roles[0],
    addr:"",
    gender:"",
    language:[]
  };
  
  
  
  checkFlag() {
    this.flag = !this.flag;
   
  }
  submitForm(form:NgForm){
   
    let required_flag=true;
    this.alert_role=false;

    for(let i=0;i<3;i++){
      if(this.checkLanguages[i]==true){
        this.userDetails.language[i]=this.lang[i];
      }
      else{
        this.userDetails.language[i]="";
      }
    }
    
    if(this.userDetails.role== this.roles[0]) {
      this.alert_role=true;
      required_flag=false;
      this.userDetails.role=this.roles[0];
    }
   
    if(this.flag==true){
      if(this.userDetails['email'] == undefined) {
        this.userDetails['email'] = "";
      }
      if(this.userDetails['pn'] == undefined) {
        this.userDetails['pn'] = "";
      }
    }
   
    this.json=JSON.stringify(this.userDetails);
    console.log(form);
    //form.reset();
    this.userDetails.role=this.roles[0];  
  }
  constructor() { }

  ngOnInit() {
  }

}
