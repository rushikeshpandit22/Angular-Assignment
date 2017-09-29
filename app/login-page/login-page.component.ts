import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  model = {
    username: '',
    password: ''
  };
    loading = false;
    returnUrl: string;
    ngOnInit() {
        // reset login status
      //  this.authenticationService.logout();

        // get return url from route parameters or default to '/'
       // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
constructor(private router: Router){}
    login() {
        this.loading = true;
        //this.authenticationService.login(this.model.username, this.model.password)
         //   .subscribe(
          //      data => {
                    this.router.navigate(['PersonAccountComponent',this.model.username]);
                    localStorage.setItem('LogedUser', JSON.stringify(this.model));
              //  },
               // error => {
                //    this.alertService.error(error);
                 //   this.loading = false;
                //});
    }

}
