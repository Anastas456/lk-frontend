import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { DashboardOrganizationsMainComponent } from './dashboard-organizations-main/dashboard-organizations-main.component';
import { DashboardStatisticComponent } from './dashboard-statistic/dashboard-statistic.component';
import { isLoggedIn } from './isLoggedIn.guard';
import { OrganizationsForModerationComponent } from './organizations-for-moderation/organizations-for-moderation.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path:'',
    component:AuthFormComponent
  },
  {
    path:'auth',
    component:AuthFormComponent
  },
  {
    path:'organizations',
    loadChildren: ()=>
      import('./organizations-and-vacancies/organizations-and-vacancies.module').then((m) => m.OrganizationsAndVacanciesModule),
    canActivate: [isLoggedIn]
  },
  {
    path:'profile',
    component: ProfileComponent,
    canActivate: [isLoggedIn]
  },
  {
    path:'settings',
    loadChildren: ()=>
      import('./settings/settings.module').then((m) => m.SettingsModule),
    canActivate: [isLoggedIn]
  },
  {
    path: 'dashboard-organizations-main',
    component: DashboardOrganizationsMainComponent,
    canActivate: [isLoggedIn]
  },
  {
    path: 'organizations-for-moderation',
    component: OrganizationsForModerationComponent,
    canActivate: [isLoggedIn]
  },
  {
    path: 'dashboard-statistic',
    component: DashboardStatisticComponent,
    canActivate: [isLoggedIn]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
