import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from './shared/modules/shared-module';
import { isLoggedIn } from './isLoggedIn.guard';
import { HasRoleGuard } from './hasRole.guard';
@NgModule({
  declarations: [
    AppComponent,
    AuthFormComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [isLoggedIn, HasRoleGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
