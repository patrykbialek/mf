import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MFE2_ROUTES } from './app.routes';
import { MeetingsComponent } from './meetings.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forChild(MFE2_ROUTES),
  ],
  declarations: [
    AppComponent,
    MeetingsComponent,
  ],
  providers: [],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }
