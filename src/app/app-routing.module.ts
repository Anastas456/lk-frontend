import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { OrganizationsComponent } from './organizations/organizations.component';

const routes: Routes = [
  {
    path:'',
    component: OrganizationsComponent
  },
  {
    path:'auth',
    component: AuthFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
