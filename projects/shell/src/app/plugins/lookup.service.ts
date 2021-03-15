import { Injectable } from '@angular/core';

import { PluginOption } from './plugin';

@Injectable({ providedIn: 'root' })
export class LookupService {
    lookup(): Promise<PluginOption[]> {
        return Promise.resolve([
            {
                remoteEntry: 'http://localhost:3000/remoteEntry.js',
                remoteName: 'mfe1',
                exposedModule: './Patients',

                displayName: 'Patients',
                componentName: 'PatientsComponent'
            },
            {
                remoteEntry: 'http://localhost:3001/remoteEntry.js',
                remoteName: 'mfe2',
                exposedModule: './Meetings',

                displayName: 'Meetings',
                componentName: 'MeetingsComponent'
            },
        ] as PluginOption[]);
    }
}
