import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { BookingComponent } from './booking/booking.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PanditRegistraionComponent } from './pandit-registraion/pandit-registraion.component';
import { PanditLoginComponent } from './pandit-login/pandit-login.component';
import { PanditsuccessComponent } from './panditsuccess/panditsuccess.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NavgrahavicharComponent } from './navgrahavichar/navgrahavichar.component';
import { ContactuspageComponent } from './contactuspage/contactuspage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import{MatInputModule} from '@angular/material/input';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    LoginsuccessComponent,
    BookingComponent,
    HomepageComponent,
    PanditRegistraionComponent,
    PanditLoginComponent,
    PanditsuccessComponent,
    AboutusComponent,
    NavgrahavicharComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatInputModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
