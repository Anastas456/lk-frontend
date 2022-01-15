import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardOrganizationsMainComponent } from './dashboard-organizations-main/dashboard-organizations-main.component';
import { DashboardStatisticComponent } from './dashboard-statistic/dashboard-statistic.component';
import { DashboardsComponent } from './dashboards.component';
import { OrganizationsForModerationComponent } from './organizations-for-moderation/organizations-for-moderation.component';
import { OrganizationsInfoComponent } from './organizations-info/organizations-info.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardsComponent,
    // redirectTo:'organizations-info/main',
    // pathMatch:'full',
    children:[
      {
        path:'organizations-info',
        component: OrganizationsInfoComponent,
        // component:DashboardOrganizationsMainComponent,
        // redirectTo:'main',
        // pathMatch:'full',
        children:[
          {
            path:'main',
            component:DashboardOrganizationsMainComponent
          },
          {
            path:'for-moderation',
            component: OrganizationsForModerationComponent
          },
          {
            path:'',
            redirectTo: 'main',
            pathMatch: 'full'
          }
        ]
      },
      {
        path:'statistic',
        component: DashboardStatisticComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardsRoutingModule { }
