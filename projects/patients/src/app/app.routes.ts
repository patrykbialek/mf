import { Routes } from '@angular/router';

import { PatientsComponent } from './patients.component';

export const MFE1_ROUTES: Routes = [
    {
        path: '',
        component: PatientsComponent,
        pathMatch: 'full',
    },
];
