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

@NgModule({
  declarations: [
    AppComponent,
    OrganizationsComponent,
    HeaderComponent,
    FooterComponent,
    AuthFormComponent,
    OrganizationInfoComponent,
    VacancyComponent
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