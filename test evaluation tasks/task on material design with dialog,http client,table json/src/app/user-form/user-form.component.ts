
import { Component, OnInit,Input, Output,EventEmitter,Pipe,Inject } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/Router';
import { HttpClient } from '@angular/common/http';
import { NgForm,Validators,FormControl,FormGroup,ReactiveFormsModule,FormControlName } from '@angular/forms';
import {User} from '../model/customUserDetails';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {UserAlbums} from '../model/albums';
import { Observable } from 'rxjs/Observable';
import{GetDataService} from '../get-data.service';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

 // @Input() userDetails:object;
 // @Output() updateEvent = new EventEmitter<object>();
  id:any;
  showFormFlag:boolean;
  userdata$:Observable<Array<UserAlbums>>;
  @Input() userAlbums=new UserAlbums();
  @Output() updateFormEvent=new EventEmitter<object>();
  @Output() cancelEvent=new EventEmitter<boolean>();

  albumsUrl="https://jsonplaceholder.typicode.com/albums?userId=";

  constructor(public dialogRef: MatDialogRef<UserFormComponent>,@Inject(MAT_DIALOG_DATA) public data: any,private http:HttpClient,private route:Router,private activeRoute:ActivatedRoute,private dataService:GetDataService) { }

  submitForm(){
   
    let required_flag=true;
   // form.reset();
  //  this.updateFormEvent.emit(this.userDetails);
  // console.log(this.userDetails);
   
  }
  cancel(){
    this.cancelEvent.emit(false);  
  }

  columnNames = ['userId','id','title'];
  showPhotos(albumId:any){
    this.route.navigate(["albumdata",albumId]);
    this.showFormFlag=true;

  }

  ngOnInit() {
   // this.id =parseInt(this.activeRoute.snapshot.paramMap.get("id"));
  //  this.albumsUrl+=this.id;
  //  this.userdata$=this.dataService.getAlbumsDetails(this.albumsUrl);
  }


  

  
}
