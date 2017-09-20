import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormWizardModule } from 'angular2-wizard';
import { AppComponent } from './app.component';
import { App2Component } from './personal-information/app.component2';
import { ContactInformationComponent } from './contact-information/contact-information.component';
import { EducationComponent } from './education-information/education.component';
import { WorkComponent } from './work-information/work.component';

@NgModule({
  declarations: [
    AppComponent,
    App2Component,
    ContactInformationComponent,
    EducationComponent,
    WorkComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,FormWizardModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
