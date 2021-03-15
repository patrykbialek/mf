import { Routes } from '@angular/router';

import { MeetingsComponent } from './meetings.component';

export const MFE2_ROUTES: Routes = [
    { path: '', component: MeetingsComponent, pathMatch: 'full'}
];
