import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OrganizationInfoComponent } from './organization-info/organization-info.component';
import { VacancyComponent } from './vacancy/vacancy.component';
import { ProfileComponent } from './profile/profile.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { DashboardMainHeaderComponent } from './shared/components/dashboard-main-header/dashboard-main-header.component';
import { DashboardOrganizationsMainComponent } from './dashboard-organizations-main/dashboard-organizations-main.component';
import { DasboardSubMenuComponent } from './shared/components/dasboard-sub-menu/dasboard-sub-menu.component';
import { OrganizationsForModerationComponent } from './organizations-for-moderation/organizations-for-moderation.component';
import { DashboardStatisticComponent } from './dashboard-statistic/dashboard-statistic.component';

@NgModule({
  declarations: [
    AppComponent,
    OrganizationsComponent,
    HeaderComponent,
    FooterComponent,
    AuthFormComponent,
    OrganizationInfoComponent,
    VacancyComponent,
    ProfileComponent,
    UserSettingsComponent,
    ProfileSettingsComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
