// import { MeetingsWrapperComponent } from 'projects/meetings/src/app/meetings.component';

import { Routes } from '@angular/router';

import { ConfigComponent } from './config/config.component';
import { HomeComponent } from './home/home.component';
import { MeetingsWrapperComponent } from './wrappers/meetings-wrapper.component';
import { PatientsWrapperComponent } from './wrappers/patients-wrapper.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'config',
    component: ConfigComponent
  },
  // {
  //   path: 'patients',
  //   loadChildren: () => import('patients/Module').then(m => m.AppModule)
  //   // loadChildren: () =>
  //   //   loadRemoteModule({
  //   //     remoteEntry: 'http://localhost:3000/remoteEntry.js',
  //   //     remoteName: 'patients',
  //   //     exposedModule: './Module'
  //   //   })
  //   //     .then(m => m.AppModule),
  //   //   data: { filters: 'some_filters' }
  // },
  // {
  //   path: 'meetings',
  //   // loadChildren: () => import('patients/Module').then(m => m.AppModule)
  //   loadChildren: () =>
  //     loadRemoteModule({
  //       remoteEntry: 'http://localhost:3001/remoteEntry.js',
  //       remoteName: 'meetings',
  //       exposedModule: './Module'
  //     })
  //     .then(m => m.AppModule)
  // },
  {
    path: 'patients',
    component: PatientsWrapperComponent,
  },
  {
    path: 'meetings',
    component: MeetingsWrapperComponent,
  }

];
