import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';   //needed this for *ngmodel directive   --by thippeswamy 
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { ComponentOrderListComponent } from './component-order-list/component-order-list.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    ComponentOrderListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule     //needed this for *ngmodel directive    --by thippeswamy
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
