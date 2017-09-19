import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { App2Component } from './PersonalInfromation/app.component2';
import { ContactInformationComponent } from './contact-information/contact-information.component';
import { FormWizardModule } from 'angular2-wizard';

@NgModule({
  declarations: [
    AppComponent,
    App2Component,
    ContactInformationComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,FormWizardModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
