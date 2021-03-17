import { Routes } from '@angular/router';

import { PatientsWrapperComponent } from './patients.component';

export const MFE1_ROUTES: Routes = [
    {
        path: '',
        component: PatientsWrapperComponent,
        pathMatch: 'full',
    },
];
