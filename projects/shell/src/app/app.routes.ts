// import { MeetingsComponent } from 'projects/mfe2/src/app/meetings.component';

import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';

import { ConfigComponent } from './config/config.component';
import { HomeComponent } from './home/home.component';
import { MeetingsComponent } from './meetings/meetings.component';

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
  {
    path: 'patients',
    // loadChildren: () => import('mfe1/Module').then(m => m.FlightsModule)
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:3000/remoteEntry.js',
        remoteName: 'mfe1',
        exposedModule: './Module'
      })
        .then(m => m.AppModule),
    data: { filters: 'some_filters' }
  },
  // {
  //   path: 'meetings',
  //   // loadChildren: () => import('mfe1/Module').then(m => m.FlightsModule)
  //   loadChildren: () =>
  //     loadRemoteModule({
  //       remoteEntry: 'http://localhost:3001/remoteEntry.js',
  //       remoteName: 'mfe2',
  //       exposedModule: './Module'
  //     })
  //     .then(m => m.AppModule)
  // },
  {
    path: 'meetings',
    component: MeetingsComponent,
  }

];
