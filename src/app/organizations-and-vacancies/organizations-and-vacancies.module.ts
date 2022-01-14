import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationsAndVacanciesRoutingModule } from './organizations-and-vacancies-routing.module';
import { OrganizationsAndVacanciesComponent } from './organizations-and-vacancies.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { SharedModule } from '../shared/modules/shared-module';
import { OrganizationInfoComponent } from './organization-info/organization-info.component';
import { VacanciesListComponent } from './vacancies-list/vacancies-list.component';
import { VacancyComponent } from './vacancy/vacancy.component';


@NgModule({
  declarations: [
    OrganizationsAndVacanciesComponent,
    OrganizationsComponent,
    OrganizationInfoComponent,
    VacanciesListComponent,
    VacancyComponent
  ],
  imports: [
    CommonModule,
    OrganizationsAndVacanciesRoutingModule,
    SharedModule
  ]
})
export class OrganizationsAndVacanciesModule { }
