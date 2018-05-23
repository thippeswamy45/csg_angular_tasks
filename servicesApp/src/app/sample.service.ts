import { Injectable } from '@angular/core';

@Injectable()
export class SampleService {
  cars=["ford","bmw","audi"];
  constructor() { }

  myData(){
    return this.cars;
  }

}
