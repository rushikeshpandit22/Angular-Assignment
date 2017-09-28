import { Component, Output, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-Personal-Information',
  templateUrl: './app.component2.html',
  styleUrls: ['./app.component2.css']
})
export class App2Component implements OnInit, OnDestroy {
fromTitle: string = 'Personal Information';
@Output() messageEvent = new EventEmitter<string>(); 	
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

ngOnInit() {
	this.messageEvent.emit(this.fromTitle)
}
submitForm(form: NgForm) {
    console.log(this.userdata);
	localStorage.setItem('userdata', this.userdata.fname);
	
  }

ngOnDestroy() {
	console.log('aplication destroy');
}	
	
}
