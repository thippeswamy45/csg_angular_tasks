import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {User} from './model/customUserDetails';
import {UserAlbums} from './model/albums';
import {AlbumPhotos} from './model/albumPhotos';
@Injectable()
export class GetDataService {
  sampleUrl="https://jsonplaceholder.typicode.com/users"; 
  constructor(private http:HttpClient) { }

  getDetails(url:any):Observable<Array<User>>{
    
    return this.http.get<Array<User>>(url);

  }
  getAlbumsDetails(url:any):Observable<Array<UserAlbums>>{
    
    return this.http.get<Array<UserAlbums>>(url);

  }
  getAlbumsPhotosDetails(url:any):Observable<Array<AlbumPhotos>>{
    
    return this.http.get<Array<AlbumPhotos>>(url);

  }

}
