import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MFE2_ROUTES } from './app.routes';
import { MeetingsComponent } from './meetings.component';
import { PatientMeetingsComponent } from './patient-meetings.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forChild(MFE2_ROUTES),
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    MeetingsComponent,
    PatientMeetingsComponent,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ],
  exports: [
    MeetingsComponent,
    PatientMeetingsComponent,
  ]
})
export class AppModule { }
