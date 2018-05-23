import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {User} from './model/customUserDetails';
@Injectable()
export class GetDataService {
  sampleUrl="https://jsonplaceholder.typicode.com/users"; 
  constructor(private http:HttpClient) { }

  getDetails():Observable<Array<User>>{
    
    return this.http.get<Array<User>>(this.sampleUrl);

  }

}
