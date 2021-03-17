
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MFE1_ROUTES } from './app.routes';
import { PatientsComponent } from './patients.component';
import { PluginProxyComponent } from './plugins/plugin-proxy.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forChild(MFE1_ROUTES),
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    PatientsComponent,
    PluginProxyComponent,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
