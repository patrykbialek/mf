import { filter, tap } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MfeApiService } from '@shared-lib';

@Component({
  selector: 'mfe1-patients',
  template: `
        <h1>Patients</h1>
        <div class="task">
          <div *ngFor="let person of filteredPersons">{{ person.fullName }} (age {{ person.age }})</div>
        </div>
    `
})

export class PatientsComponent implements OnInit {
  persons = [
    { fullName: 'John Dow', age: 21 },
    { fullName: 'Patrick Swayze', age: 30 },
    { fullName: 'Chuck Norris', age: 40 },
  ];
  filteredPersons = this.persons;

  constructor(
    private activatedRoute: ActivatedRoute,
    private mfeApiService: MfeApiService,
  ) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(console.log);

    this.mfeApiService.patientFilters$
      .pipe(
        tap(data => console.log('patients', data)),
        tap(() => this.filteredPersons = this.persons),
        filter(filters => Boolean(filters && filters.age)),
      )
      .subscribe((filters: any) => {
        this.filteredPersons = this.persons.filter(person => person.age === filters.age);
      });

    if (history.state.data && history.state.data.filters && history.state.data.filters.age) {
      this.filteredPersons = this.persons.filter(person => +person.age === +history.state.data.filters.age);
    }
  }
}
