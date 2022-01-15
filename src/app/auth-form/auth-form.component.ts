import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../shared/services/user-service.service';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {

  auth;

  constructor(private userService: UserServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.auth={
      email:'',
      password:''
    }
  }

  authUser(){
    this.userService.loginUser(this.auth).subscribe(
      response => {
        // console.log(response);
        this.router.navigate(['/organizations']);
        this.userService.storeUser(response.token, response.user)
      },
      error =>{
        console.log(error);
        alert('Был введен неправильный логин или пароль. Пожалуйста, попробуйте снова.');
      }
    )
  }

}
