
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MfeApiService } from '@shared-lib';

import { AppComponent } from './app.component';
import { MFE1_ROUTES } from './app.routes';
import { PatientsComponent } from './patients.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forChild(MFE1_ROUTES),
  ],
  declarations: [
    AppComponent,
    PatientsComponent,
  ],
  providers: [
    MfeApiService,
  ],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }
