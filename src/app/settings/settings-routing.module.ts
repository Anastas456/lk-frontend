import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { SettingsComponent } from './settings.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';

const routes: Routes = [
  {
    path:'',
    component:SettingsComponent,
    // outlet: 'primary',
    children: [
      {
        path: '',
        redirectTo: 'user-settings',
        pathMatch: 'full'
      },
      {
        path:'user-settings',
        component: UserSettingsComponent
      },
      {
        path:'profile-settings',
        component: ProfileSettingsComponent
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
