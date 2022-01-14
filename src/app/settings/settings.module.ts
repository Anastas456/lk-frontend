import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { SharedModule } from '../shared/modules/shared-module';
import { SettingsMenuComponent } from '../shared/components/settings-menu/settings-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SettingsComponent,
    ProfileSettingsComponent,
    UserSettingsComponent,
    SettingsMenuComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SettingsModule { }
