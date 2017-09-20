import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { userinformation } from '../UserIformation';
@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.css']
})
export class ContactInformationComponent {
userdata: userinformation = {
        fname: '',
        lname: '',
        maritalstatus: '',
        gender: '',
        bloodgroup: '',
        dob: '',
        email: '',
        mobile: 0,
        adress: '',
        city: '',
        state: '',
        zipcode: 0
    };
submitForm(form: NgForm) {
        console.log(this.userdata);
    }
}
