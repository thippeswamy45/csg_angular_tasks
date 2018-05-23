import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,Validators,FormControl,FormGroup,ReactiveFormsModule } from '@angular/forms';  // for template driven ngform
import { RouterModule,Routes } from '@angular/Router';  // for routing  
import { HttpClientModule,HttpClient } from '@angular/common/http';   // http client 
// --thippeswamy --angular material related imports
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';  //for animations  of angular material
import {MatTableModule,MatSelectModule,MatDialogModule,MatFormFieldModule,MatInputModule,MatButtonModule, MatCheckboxModule} from '@angular/material';// for angular material table 

///////////////////////
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import{GetDataService} from './get-data.service';
import { UserFormComponent } from './user-form/user-form.component';
import { UserAlbumPhotosComponent } from './user-album-photos/user-album-photos.component';

const appRoutes : Routes= [
  {path:"",component:UserListComponent}, 
  {path:"userdata/:id",component:UserFormComponent}, 
  {path:"albumdata/:id",component:UserAlbumPhotosComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    UserAlbumPhotosComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GetDataService],
  bootstrap: [AppComponent],
  exports:[
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatFormFieldModule,
    MatTableModule,                      //--thippeswamy --- exporting the angular material for user components to import
    BrowserAnimationsModule]           //--thippeswamy --- exporting the angular material for user components to import
})
export class AppModule { }
