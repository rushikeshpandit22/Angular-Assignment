import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  model: any = {};
    loading = false;
    returnUrl: string;
    ngOnInit() {
        // reset login status
      //  this.authenticationService.logout();

        // get return url from route parameters or default to '/'
       // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        //this.authenticationService.login(this.model.username, this.model.password)
         //   .subscribe(
          //      data => {
                  //  this.router.navigate([this.returnUrl]);
              //  },
               // error => {
                //    this.alertService.error(error);
                 //   this.loading = false;
                //});
    }

}
