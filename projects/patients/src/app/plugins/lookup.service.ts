import { Injectable } from '@angular/core';

import { PluginOption } from './plugin';

@Injectable({ providedIn: 'root' })
export class LookupService {
    lookup(): Promise<PluginOption[]> {
        return Promise.resolve([
            // {
            //     remoteEntry: 'https://ods-patient.web.app/remoteEntry.js',
            //     // remoteEntry: 'http://localhost:3000/remoteEntry.js',
            //     remoteName: 'patients',
            //     exposedModule: './Patients',

            //     displayName: 'Patients',
            //     componentName: 'PatientsComponent'
            // },
            {
                // remoteEntry: 'https://ods-meeting.web.app/remoteEntry.js',
                remoteEntry: 'http://localhost:3001/remoteEntry.js',
                // remoteEntry: 'https://mvui.web.app/remoteEntry.js',
                remoteName: 'meetings',
                exposedModule: './Meetings',

                displayName: 'Meetings',
                componentName: 'MeetingsComponent'
            },
            // {
            //     remoteEntry: 'https://mvui.web.app/remoteEntry.js',
            //     remoteName: 'meetings',
            //     exposedModule: './Meetings',

            //     displayName: 'PatientMeetings',
            //     componentName: 'PatientMeetingsComponent'
            // },
        ] as PluginOption[]);
    }
}
