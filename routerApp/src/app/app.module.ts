import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/Router';

import { AppComponent } from './app.component';
import { TestCompComponent } from './test-comp/test-comp.component';
import { EditCompComponent } from './edit-comp/edit-comp.component';
import { HomeComponent } from './home/home.component';

const appRoutes : Routes = [
  {path:"",component:HomeComponent},
  {path:"test",component:TestCompComponent},
  {path:"edit",component:EditCompComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TestCompComponent,
    EditCompComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
