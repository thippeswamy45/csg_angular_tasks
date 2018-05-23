import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/observable';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class SampleService {
  sampleUrl="https://jsonplaceholder.typicode.com/users";

  
  
  constructor(private http:HttpClient) { }

  getDetails():Observable<any>{
    return this.http.get(this.sampleUrl);

  }

}
