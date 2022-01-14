import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/shared/services/user-service.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {

  user=JSON.parse(localStorage.getItem('user'));

  userSettingsForm:FormGroup;

  constructor(private userService: UserServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.userSettingsForm= new FormGroup({
      //логин, телефон
      email:new FormControl(this.user.email),
      presentPass:new FormControl(null),
      newPass:new FormControl(null),
      passwordConfirmation:new FormControl(null),
      
    });
  }


  onSave(){
    this.userService.updateUser(this.user.id, this.userSettingsForm.value)
      .subscribe(
        response => {
          // console.log(response);
          alert('Изменения сохранены');
        },
        error => {
          console.log(error)
        }
      )
   }

  onDelete(){
    this.userService.deleteUser(this.user.id)
    .subscribe(
      response => {
        // console.log(response);
        this.router.navigate(['/auth']);
      },
      error => {
        console.log(error);
      });
  }


}
