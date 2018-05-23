import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestCompComponent } from './test-comp/test-comp.component';
import { SampleService } from './sample.service';


@NgModule({
  declarations: [
    AppComponent,
    TestCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
