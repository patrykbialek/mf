import { filter, tap } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
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

export class MeetingsComponent implements OnInit {

    meetings;
    filteredMeetings;

    constructor(
        private http: HttpClient,
        private mfeApiService: MfeApiService,
    ) { }

    ngOnInit() {
        this.http.get('https://private-7e78ec-ods1.apiary-mock.com/meetings')
            .subscribe(meetings => {
                this.meetings = meetings;
                this.filteredMeetings = this.meetings;
            });

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