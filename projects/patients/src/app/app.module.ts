
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MfeApiService } from '@shared-lib';

import { AppComponent } from './app.component';
import { MFE1_ROUTES } from './app.routes';
import { PatientsComponent } from './patients.component';
import { PluginProxyComponent } from './plugins/plugin-proxy.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forChild(MFE1_ROUTES),
  ],
  declarations: [
    AppComponent,
    PatientsComponent,
    PluginProxyComponent,
  ],
  providers: [
    MfeApiService,
  ],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }
