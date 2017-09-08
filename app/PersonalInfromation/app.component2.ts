import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-comp',
  templateUrl: './app.component2.html',
  styleUrls: ['./app.component2.css']
})
export class App2Component {
    fromTitle = 'Personal Information';
    userdata = {
        fname: '',
        lname: '',
        email: '',
        address: '',
        mobileNo: '',
        dob: ''
    };
    submitForm(form: NgForm) {
        console.log(this.userdata);
    }     
}
