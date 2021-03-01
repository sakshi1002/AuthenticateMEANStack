import { Component, OnInit } from '@angular/core';
import {RegisterComponent} from '../register/register.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  today = new Date();
   myday = this.today.toDateString();
   

  constructor() { }

  ngOnInit(): void {
  }

}
