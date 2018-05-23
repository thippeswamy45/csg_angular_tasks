import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';     // for ngModel directive
import { FormsModule,Validators } from '@angular/forms';  // for template driven ngform
import { RouterModule,Routes } from '@angular/Router';  // for routing  
import { HttpClientModule,HttpClient } from '@angular/common/http';   // http client 
import { SampleService } from './sample.service';
import { AppComponent } from './app.component';
import { HttpExampleComponent } from './http-example/http-example.component';
import { FormComponent } from './form/form.component';

const appRoutes : Routes = [
  {path:"",component:HttpExampleComponent},
  {path:"userdetails",component:HttpExampleComponent}, 
];



@NgModule({
  declarations: [
    AppComponent,
    HttpExampleComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [SampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
