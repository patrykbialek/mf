
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { ConfigComponent } from './config/config.component';
import { HomeComponent } from './home/home.component';
import { PluginProxyComponent } from './plugins/plugin-proxy.component';
import * as wrappers from './wrappers';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule,

  ],
  declarations: [
    AppComponent,
    PluginProxyComponent,
    ConfigComponent,
    HomeComponent,

    ...wrappers.wrappers
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    ...wrappers.wrappers
  ]
})
export class AppModule { }
