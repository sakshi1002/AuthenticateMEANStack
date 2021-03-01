import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   usernamme = "Sakshi Gaikwad";

   today = new Date();
   myday = this.today.toDateString();
   
  



  title = 'authenticate';






}
