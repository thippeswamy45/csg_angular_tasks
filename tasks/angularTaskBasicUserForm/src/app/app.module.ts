import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';    // this is for [(ngmodel)] directive  -- thippeswamy


import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';     
import { SampleComponent } from './sample/sample.component';


@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    SampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
