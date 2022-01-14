import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { DashboardMainHeaderComponent } from './shared/components/dashboard-main-header/dashboard-main-header.component';
import { DashboardOrganizationsMainComponent } from './dashboard-organizations-main/dashboard-organizations-main.component';
import { DasboardSubMenuComponent } from './shared/components/dasboard-sub-menu/dasboard-sub-menu.component';
import { OrganizationsForModerationComponent } from './organizations-for-moderation/organizations-for-moderation.component';
import { DashboardStatisticComponent } from './dashboard-statistic/dashboard-statistic.component';
import { SharedModule } from './shared/modules/shared-module';
import { isLoggedIn } from './isLoggedIn.guard';

@NgModule({
  declarations: [
    AppComponent,
    AuthFormComponent,
    ProfileComponent,
    DashboardMainHeaderComponent,
    DashboardOrganizationsMainComponent,
    DasboardSubMenuComponent,
    OrganizationsForModerationComponent,
    DashboardStatisticComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [isLoggedIn],
  bootstrap: [AppComponent]
})
export class AppModule { }
