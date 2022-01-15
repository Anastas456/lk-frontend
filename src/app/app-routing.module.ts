import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { isLoggedIn } from './isLoggedIn.guard';
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
    path:'dashboards',
    loadChildren: ()=>
      import('./dashboards/dashboards.module').then((m) => m.DashboardsModule),
    canActivate:[isLoggedIn],
    data: {
      expectedRole: ['1']
    }
  }
  // {
  //   path: 'dashboard-organizations-main',
  //   component: DashboardOrganizationsMainComponent,
  //   canActivate: [isLoggedIn],
  //   data: {
  //     expectedRole: ['1']
  //   }
  // },
  // {
  //   path: 'organizations-for-moderation',
  //   component: OrganizationsForModerationComponent,
  //   canActivate: [isLoggedIn],
  //   data: {
  //     expectedRole: ['1']
  //   }
  // },
  // {
  //   path: 'dashboard-statistic',
  //   component: DashboardStatisticComponent,
  //   canActivate: [isLoggedIn],
  //   data: {
  //     expectedRole: ['1']
  //   }
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
