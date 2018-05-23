import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  alert_string="! this field is required";
  roles=["select one","programmer","developer","tester","support"];
  flag = false;
  jsObject:any;
  json:string;
  alert_fn = false;
  alert_ln = false;
  alert_addr = false;
  alert_email = false;
  alert_pn = false;
  alert_role = false;
  
  userDetails={
    
    fn:"",
    ln:"",
    role:this.roles[0],
    addr:"",
    pn:"",
    email:""
  };
  
  checkFlag() {
    this.flag = !this.flag;
    
    
  }
  submitForm(){
    
    let required_flag=true;
    this.alert_fn=false;
    this.alert_ln=false;
    this.alert_addr=false;
    this.alert_email=false;
    this.alert_pn=false;
    this.alert_role=false;
    
    if(this.userDetails.fn == "") {
      this.alert_fn=true;
      required_flag=false;
    }
    if(this.userDetails.ln == "") {
      this.alert_ln=true;
      required_flag=false;
    }
    if(this.userDetails.role== this.roles[0]) {
      this.alert_role=true;
      required_flag=false;
    }
    if(this.userDetails.addr == "") {
      this.alert_addr=true;
      required_flag=false;
    }
    
    if(this.flag==true){
      if(this.userDetails.pn == "") {
        this.alert_pn=true;
        required_flag=false;
      }
      if(this.userDetails.email == "") {
        this.alert_email=true;
        required_flag=false;
      }
      else if(required_flag==true) {
       
        this.jsObject={Firstname:this.userDetails.fn,Lastname:this.userDetails.ln,Address:this.userDetails.addr,Role:this.userDetails.role,Phone_no:this.userDetails.pn,Email:this.userDetails.email};
      }
    }
    else if(required_flag==true){
     
      this.jsObject={Firstname:this.userDetails.fn,Lastname:this.userDetails.ln,Address:this.userDetails.addr,Role:this.userDetails.role};
    }
    this.json=JSON.stringify(this.jsObject);
    this.userDetails = {
    
      fn:"",
      ln:"",
      role:this.roles[0],
      addr:"",
      pn:"",
      email:""
    };
  }

  constructor() {
  
   }

  ngOnInit() {
  }

}
