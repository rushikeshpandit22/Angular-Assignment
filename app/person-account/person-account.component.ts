import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-person-account',
  templateUrl: './person-account.component.html',
  styleUrls: ['./person-account.component.css']
})
export class PersonAccountComponent implements OnInit {
 name: string;
 message: string;
  constructor(private actiavtedrouter: ActivatedRoute, private router: Router) {
    //this.name = actiavtedrouter.snapshot.params['username'];
     actiavtedrouter.params.subscribe(
       (param) => this.name = param['username']
     );
  }
receiveMessage($event) {
 this.message = $event;
 console.log($event);	
 }
  ngOnInit() {
  }
logout(){
  console.log("logout");
  this.router.navigate(['/']);
  localStorage.clear();
}
}
