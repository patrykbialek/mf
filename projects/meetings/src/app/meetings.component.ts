import { filter, tap } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';
import { MfeApiService } from '@shared-lib';

@Component({
    selector: 'app-meetings',
    template: `
        <h1>Meetings</h1>
        <div class="task">
            <ng-container *ngFor="let meeting of filteredMeetings">
                <div>{{ meeting.name }} ({{ meeting.date }})</div>
            </ng-container>
        </div>

        <button (click)="setMeetingDate()">Set for today</button>
    `
})

export class MeetingsWrapperComponent implements OnInit {

    meetings = [
        { name: 'My meeting in the future', date: '04/03/2021' },
        { name: 'My old meeting', date: '02/03/2021' },
        { name: 'My newest meeting 1', date: '03/15/2021' },
        { name: 'My newest meeting 2', date: '03/16/2021' },
        { name: 'My newest meeting 3', date: '03/16/2021' },
        { name: 'My newest meeting 4', date: '03/16/2021' },
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

    setMeetingDate() {
        this.mfeApiService.setPatientFilters({ date: '03/16/2021' });
    }
}