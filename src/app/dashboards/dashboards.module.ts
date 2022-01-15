import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardsRoutingModule } from './dashboards-routing.module';
import { DashboardsComponent } from './dashboards.component';
import { DashboardOrganizationsMainComponent } from './dashboard-organizations-main/dashboard-organizations-main.component';
import { OrganizationsForModerationComponent } from './organizations-for-moderation/organizations-for-moderation.component';
import { DashboardStatisticComponent } from './dashboard-statistic/dashboard-statistic.component';
import { DashboardMainHeaderComponent } from '../shared/components/dashboard-main-header/dashboard-main-header.component';
import { DasboardSubMenuComponent } from '../shared/components/dasboard-sub-menu/dasboard-sub-menu.component';
import { OrganizationsInfoComponent } from './organizations-info/organizations-info.component';


@NgModule({
  declarations: [
    DashboardsComponent,
    DashboardOrganizationsMainComponent,
    OrganizationsForModerationComponent,
    DashboardStatisticComponent,
    DashboardMainHeaderComponent,
    DasboardSubMenuComponent,
    OrganizationsInfoComponent
  ],
  imports: [
    CommonModule,
    DashboardsRoutingModule
  ]
})
export class DashboardsModule { }
