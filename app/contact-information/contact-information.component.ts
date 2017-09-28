import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.css']
})
export class ContactInformationComponent {
    userdata = {
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
