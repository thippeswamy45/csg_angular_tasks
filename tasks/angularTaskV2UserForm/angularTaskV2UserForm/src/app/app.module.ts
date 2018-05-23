import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,Validators } from '@angular/forms';
import { NgModule} from '@angular/core';      // this is for [(ngmodel)] directive  -- thippeswamy


import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { SimpleUserFormComponent } from './simple-user-form/simple-user-form.component';


@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    SimpleUserFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
