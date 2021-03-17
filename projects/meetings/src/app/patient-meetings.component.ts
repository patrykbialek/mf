import { filter, tap } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';
import { MfeApiService } from '@shared-lib';

@Component({
    selector: 'app-patient-meetings',
    template: `
        <h1>Meetings for John Dow</h1>
        <div class="task">
            <ng-container *ngFor="let meeting of filteredMeetings">
                <div>{{ meeting.name }} ({{ meeting.date }})</div>
            </ng-container>
        </div>
    `
})

export class PatientMeetingsComponent implements OnInit {

    meetings = [
        { name: 'My newest meeting 4', date: '03/16/2021', patient: 'John Dow' },
    ];
    filteredMeetings = this.meetings;

    constructor(
        private mfeApiService: MfeApiService,
    ) { }

    ngOnInit() {
        this.mfeApiService.patientFilters$
            .pipe(
                tap(() => this.filteredMeetings = this.meetings),
                filter(filters => Boolean(filters && filters.date)),
            )
            .subscribe((filters: any) => {
                this.filteredMeetings = this.meetings.filter(meeting => meeting.date === filters.date);
            });
    }
}