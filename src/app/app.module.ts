import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonService } from './common.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ContosoBookingComponent } from './contoso-booking/contoso-booking.component';
import { GetComponent } from './contoso-booking/get/get.component';
import { PostComponent } from './contoso-booking/post/post.component';
import { ContosoDetailsComponent } from './contoso-details/contoso-details.component';
import { ShowComponent } from './contoso-details/show/show.component';

@NgModule({
  declarations: [
    AppComponent,
    
    ContosoBookingComponent,
    GetComponent,
    PostComponent,
    ContosoDetailsComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
