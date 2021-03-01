import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  exportAs:'ngForm'
})


export class RegisterComponent implements OnInit {
  user : User;
  homeuse:boolean = false;
  constructor(private route: ActivatedRoute,
    private router: Router,private http:HttpClient) { }

  ngOnInit(): void {
  }
  onCreatePost(postData: { name: string; email: string; password: string; })
  {
    
    console.log(postData);
    const username = postData.name;

    this.http.post('http://localhost:4000/api/signup',postData,{headers: new HttpHeaders({'Content-Type':'application/json'})}).subscribe(responseData => {
        console.log(responseData);
        alert("welcome account is created");
        this.homeuse= true;
        this.router.navigate(['/home']);
      });
      

}

}

