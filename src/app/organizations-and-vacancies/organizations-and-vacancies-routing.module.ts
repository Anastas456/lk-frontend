import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrganizationInfoComponent } from './organization-info/organization-info.component';
import { OrganizationsAndVacanciesComponent } from './organizations-and-vacancies.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { VacancyComponent } from './vacancy/vacancy.component';

const routes: Routes = [
  {
    path:'',
    component: OrganizationsAndVacanciesComponent,
    // pathMatch: 'full',
    children:[
      {
        path:'',
        component:OrganizationsComponent
      },
      {
        path: 'organization-info/:id',
        component: OrganizationInfoComponent,
      },
      {
        path: 'organization-info/:id/vacancy/:id',
        component: VacancyComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationsAndVacanciesRoutingModule { }
