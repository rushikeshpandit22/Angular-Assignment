import { Component } from '@angular/core';

@Component({
  selector: 'app-root',  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  
})
export class AppComponent {
title = 'School Employee Managment System';
message: string;
onComplete(e) {
        console.log('complited');
    }
receiveMessage($event) {
 this.message = $event;
 console.log($event);	
 }
}
