import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../shared/services/user-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:any;

  constructor(private userService: UserServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.user=JSON.parse(localStorage.getItem('user'));
  }

  onLogoutUser(){
    this.userService.logoutUser();
    this.router.navigate(['/auth'])
  }

}
