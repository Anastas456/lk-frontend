import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { OrganizationInfoComponent } from './organization-info/organization-info.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { ProfileComponent } from './profile/profile.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { VacancyComponent } from './vacancy/vacancy.component';

const routes: Routes = [
  {
    path:'',
    component: OrganizationsComponent
  },
  {
    path:'organizations',
    component: OrganizationsComponent
  },
  {
    path:'organization-info',
    component: OrganizationInfoComponent
  },
  {
    path:'vacancy',
    component: VacancyComponent
  },
  {
    path:'auth',
    component: AuthFormComponent
  },
  {
    path:'profile',
    component: ProfileComponent
  },
  {
    path:'user-settings',
    component: UserSettingsComponent
  },
  {
    path:'profile-settings',
    component: ProfileSettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
