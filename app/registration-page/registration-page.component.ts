import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css'],
  providers: [UserService]
})
export class RegistrationPageComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }
   model: any = {};
    loading = false;

    register() {
     this.userService.signupUser(this.model.email,this.model.password);
   
    }
}
