import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule,HttpClient } from '@angular/common/http';   // http client 
import { SampleService } from './sample.service';
import { AppComponent } from './app.component';
import { HttpExampleComponent } from './http-example/http-example.component';




@NgModule({
  declarations: [
    AppComponent,
    HttpExampleComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [SampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
