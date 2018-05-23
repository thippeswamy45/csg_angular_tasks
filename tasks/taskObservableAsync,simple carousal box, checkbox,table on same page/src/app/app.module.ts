import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,Validators } from '@angular/forms';  // for template driven ngform
import { RouterModule,Routes } from '@angular/Router';  // for routing  
import { HttpClientModule,HttpClient } from '@angular/common/http';   // http client 

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import{GetDataService} from './get-data.service';
import { UserFormComponent } from './user-form/user-form.component';

const appRoutes : Routes= [
  {path:"",component:UserListComponent}, 
  {path:"editdetails/:id",component:UserFormComponent}, 
];

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
