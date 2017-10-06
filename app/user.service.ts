import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx'; 
//import { userRegistration } from './UserIformation';
declare var firebase: any;
@Injectable()
export class UserService {
  constructor(private http: Http) { }
 
  sendData(userdata: any){
    const body = JSON.stringify(userdata);      
    return this.http.post('https://empmap-angular-2.firebaseio.com/userdata.json',body).map((data: Response) => data.json());
     
 }
 signupUser(email:string,password:string){
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    //var errorCode = error.code;
    console.log(error.message);
    // ...
  });
   
 }

}
