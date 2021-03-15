import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { ConfigComponent } from './config/config.component';
import { HomeComponent } from './home/home.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { PluginProxyComponent } from './plugins/plugin-proxy.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    AppComponent,
    PluginProxyComponent,
    ConfigComponent,
    HomeComponent,
    MeetingsComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    MeetingsComponent
  ]
})
export class AppModule { }
