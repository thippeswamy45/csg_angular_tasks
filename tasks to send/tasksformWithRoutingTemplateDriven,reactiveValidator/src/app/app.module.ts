import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';     // for ngModel directive
import { FormsModule,Validators } from '@angular/forms';  // for template driven ngform
import { RouterModule,Routes } from '@angular/Router';  // for routing  
import { ReactiveFormsModule } from '@angular/forms';  // for reactive forms
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { NewUserDetailsComponent } from './new-user-details/new-user-details.component';

const appRoutes : Routes = [
  {path:"",component:AppComponent},
  {path:"userdetails",component:UserDetailsComponent},
  {path:"userdetails/editdetails/:ids",component:UserDetailsComponent },
  {path:"userdetails/newuserdetails",component:UserDetailsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    EditUserComponent,
    NewUserDetailsComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,FormsModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
