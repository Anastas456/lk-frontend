import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserServiceService } from 'src/app/shared/services/user-service.service';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css']
})
export class ProfileSettingsComponent implements OnInit {

  user=JSON.parse(localStorage.getItem('user'));

  profileSettingsForm:FormGroup;

  constructor(private userService:UserServiceService) { }

  ngOnInit(): void {
    this.profileSettingsForm = new FormGroup({
      name: new FormControl(this.user.name),
      surname: new FormControl(this.user.surname),
      // Отчество, возраст, специальность, образование, опыт

    })
  }

  onSave(){
    this.userService.updateUser(this.user.id, this.profileSettingsForm.value)
      .subscribe(
        response => {
          console.log(response);
          alert('Изменения сохранены');
        },
        error => {
          console.log(error)
        }
      )
  }

}
