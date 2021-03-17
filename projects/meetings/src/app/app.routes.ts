import { Routes } from '@angular/router';

import { MeetingsWrapperComponent } from './meetings.component';

export const MFE2_ROUTES: Routes = [
    { path: '', component: MeetingsWrapperComponent, pathMatch: 'full'}
];
