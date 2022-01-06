import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { DashboardOrganizationsMainComponent } from './dashboard-organizations-main/dashboard-organizations-main.component';
import { DashboardStatisticComponent } from './dashboard-statistic/dashboard-statistic.component';
import { HelpComponent } from './help/help.component';
import { OrganizationInfoComponent } from './organization-info/organization-info.component';
import { OrganizationsForModerationComponent } from './organizations-for-moderation/organizations-for-moderation.component';
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
  },
  {
    path: 'dashboard-organizations-main',
    component: DashboardOrganizationsMainComponent
  },
  {
    path: 'organizations-for-moderation',
    component: OrganizationsForModerationComponent
  },
  {
    path: 'dashboard-statistic',
    component: DashboardStatisticComponent
  },
  {
    path: 'help',
    component: HelpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
