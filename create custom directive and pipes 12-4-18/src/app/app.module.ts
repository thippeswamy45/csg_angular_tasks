import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';   //needed this for *ngmodel directive   --by thippeswamy 
import { NgModule } from '@angular/core';

import { LowerCasePipe } from '@angular/common';
import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { ComponentOrderListComponent } from './component-order-list/component-order-list.component';

import { BackgroundColorDirective } from './background-color.directive';
import { NotShowDirective } from './not-show.directive';
import { ToKgPipe } from './to-kg.pipe';
import { ToKgPipeCompComponent } from './to-kg-pipe-comp/to-kg-pipe-comp.component';
import { ToLowerLetterComponent } from './to-lower-letter/to-lower-letter.component';
import { DateMmddyyyyazPipe } from './date-mmddyyyyaz.pipe';
import { DatePipeCompComponent } from './date-pipe-comp/date-pipe-comp.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    ComponentOrderListComponent,
    BackgroundColorDirective,
    NotShowDirective,
    ToKgPipe,
    ToKgPipeCompComponent,
    ToLowerLetterComponent,
    DateMmddyyyyazPipe,
    DatePipeCompComponent
  ],
  imports: [
    BrowserModule,
    FormsModule     //needed this for *ngmodel directive    --by thippeswamy
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
