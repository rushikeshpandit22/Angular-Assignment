import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormWizardModule } from 'angular2-wizard';
import { AppComponent } from './app.component';
import { App2Component } from './personal-information/app.component2';
import { ContactInformationComponent } from './contact-information/contact-information.component';
import { EducationComponent } from './education-information/education.component';
import { WorkComponent } from './work-information/work.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { appRoutes } from './app.router';
import { RouterModule } from '@angular/router';
import { PersonAccountComponent } from './person-account/person-account.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    App2Component,
    ContactInformationComponent,
    EducationComponent,
    WorkComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    PersonAccountComponent
   
 ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,FormWizardModule,RouterModule.forRoot(appRoutes),HttpModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
