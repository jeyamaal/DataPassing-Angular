import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SchoolComponent } from './school/school.component';
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SchoolComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
