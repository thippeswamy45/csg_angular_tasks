import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import {Observable} from 'rxjs/observable';
import { HttpClient } from '@angular/common/http';
import { SampleService } from '../sample.service';
@Component({
  selector: 'app-http-example',
  templateUrl: './http-example.component.html',
  styleUrls: ['./http-example.component.css']
})
export class HttpExampleComponent implements OnInit {
  data:object;
  loading:boolean;
  constructor(private http:HttpClient,private SampleServiceData:SampleService) { }
  sampleUrl="https://jsonplaceholder.typicode.com/users";

  makeRequest(){
    this.loading=true;
    this.http.get(this.sampleUrl).subscribe(data1=>{
      this.data=data1;
      this.loading=false;
    });

  }
  makeRequestObservable(){
    this.data=this.SampleServiceData.getDetails("3");
  }

  makeRequestObservableData(){
    this.data=this.SampleServiceData.getDetails("4").subscribe(data1=>{
      this.data=data1;
    });
  }

  
  ngOnInit()
  {
    
    this.makeRequest();
   
  }

}
