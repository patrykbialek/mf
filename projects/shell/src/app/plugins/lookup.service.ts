import { Injectable } from '@angular/core';

import { PluginOption } from './plugin';

@Injectable({ providedIn: 'root' })
export class LookupService {
    lookup(): Promise<PluginOption[]> {
        return Promise.resolve([
            {
                remoteEntry: 'https://ods-patient.web.app/remoteEntry.js',
                remoteName: 'patients',
                exposedModule: './Patients',

                displayName: 'Patients',
                componentName: 'PatientsComponent'
            },
            {
                remoteEntry: 'https://ods-meetings.web.app/remoteEntry.js',
                remoteName: 'meetings',
                exposedModule: './Meetings',

                displayName: 'Meetings',
                componentName: 'MeetingsComponent'
            },
        ] as PluginOption[]);
    }
}
