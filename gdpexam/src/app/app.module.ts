import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { PagereviewComponent } from './pagereview/pagereview.component';
import {HttpModule} from '@angular/http'
import {FormsModule} from '@angular/forms' 
import { HttpService } from 'src/app/http.service';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    PagereviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
