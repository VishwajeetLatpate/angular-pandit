import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegistrationComponent } from './registration/registration.component';
import { BookingComponent } from './booking/booking.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PanditRegistraionComponent } from './pandit-registraion/pandit-registraion.component';
import { PanditLoginComponent } from './pandit-login/pandit-login.component';
import { PanditsuccessComponent } from './panditsuccess/panditsuccess.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NavgrahavicharComponent } from './navgrahavichar/navgrahavichar.component';
import { ContactuspageComponent } from './contactuspage/contactuspage.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'loginsuccess',component:LoginsuccessComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'booking',component:BookingComponent},
  {path:'pandit-registration',component:PanditRegistraionComponent},
  {path:'pandit-login',component:PanditLoginComponent},
  {path:'panditsuccess',component:PanditsuccessComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'navgrahavichar',component:NavgrahavicharComponent},
  {path:'contactuspage',component:ContactuspageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
