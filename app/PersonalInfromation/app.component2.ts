import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-Personal-Information',
  templateUrl: './app.component2.html',
  styleUrls: ['./app.component2.css']
})
export class App2Component {
    fromTitle = 'Personal Information';
    userdata = {
        fname: '',
        lname: '',
        maritalstatus: '',
        gender: '',
        bloodgroup: '',
        dob: ''
    };
    gender = [ 
       'male','female'    
    ];
    submitForm(form: NgForm) {
        console.log(this.userdata);
    }     
}
