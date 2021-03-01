import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, BehaviorSubject } from 'rxjs';
import { Userlogin } from '../userlogin.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // user = new BehaviorSubject<Userlogin>(null);
  constructor( private route: ActivatedRoute,
    private router: Router,private http:HttpClient) { }

  ngOnInit(): void {
  }

  loginClicked(form:NgForm)
  {

    const email = form.value.email;
    const password = form.value.password;
    if(email == null){
              alert('Email Field cannot be null')
    }
    if(password == null)
    {
      alert('Please enter the password');
    }

    const login = { email :email,password:password};

    //alert(password);
    try{

    
    this.http.post('http://localhost:4000/api/signin',login).subscribe(responseData => {
      console.log(responseData);

      alert("Login Succesfull! ");


      this.router.navigate(['/home']);
    })

  }
  catch(err){
    alert(`Sorry User not found in Database. Please Register`);
    console.log(err);

  }
    form.reset();
  }



}
