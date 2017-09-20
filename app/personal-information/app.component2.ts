import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { userinformation } from '../UserIformation';
@Component({
  selector: 'app-Personal-Information',
  templateUrl: './app.component2.html',
  styleUrls: ['./app.component2.css']
})
export class App2Component {
    fromTitle = 'Personal Information';
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
    gender = [ 
       'male','female'    
    ];
    submitForm(form: NgForm) {
        console.log(this.userdata);
    }     
}
