import { AppComponent } from './app.component';
import { App2Component } from './personal-information/app.component2';
import { ContactInformationComponent } from './contact-information/contact-information.component';
import { EducationComponent } from './education-information/education.component';
import { WorkComponent } from './work-information/work.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
	{path: 'registration',component: RegistrationPageComponent},
	{path: 'login',component: LoginPageComponent}
];