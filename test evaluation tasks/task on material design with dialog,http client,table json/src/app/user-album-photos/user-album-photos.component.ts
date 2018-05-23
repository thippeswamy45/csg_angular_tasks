import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/Router';
import { HttpClient } from '@angular/common/http';
import { NgForm,Validators,FormControl,FormGroup,ReactiveFormsModule,FormControlName } from '@angular/forms';

import {AlbumPhotos} from '../model/albumPhotos';
import { Observable } from 'rxjs/Observable';
import{GetDataService} from '../get-data.service';
@Component({
  selector: 'app-user-album-photos',
  templateUrl: './user-album-photos.component.html',
  styleUrls: ['./user-album-photos.component.css']
})
export class UserAlbumPhotosComponent implements OnInit {
  albumId:any;
  albumPhotos$:Observable<Array<AlbumPhotos>>;
  albumPhotosUrl="https://jsonplaceholder.typicode.com/photos?albumId=";

  columnNames = ['albumId','id','title','url','thumbnailUrl'];
  constructor(private http:HttpClient,private activeRoute:ActivatedRoute,private dataService:GetDataService) { }

  ngOnInit() {

    this.albumId =parseInt(this.activeRoute.snapshot.paramMap.get("id"));
    
    this.albumPhotosUrl+=this.albumId;
    this.albumPhotos$=this.dataService.getAlbumsPhotosDetails(this.albumPhotosUrl);
  }

}
