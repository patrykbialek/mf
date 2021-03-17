import { filter, tap } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';
import { MfeApiService } from '@shared-lib';

@Component({
  selector: 'app-patients',
  template: `
        <h1>Patients</h1>
        <div class="task">
          <div *ngFor="let person of filteredPersons">{{ person.fullName }} (age {{ person.age }})</div>
        </div>
    `
})

export class PatientsWrapperComponent implements OnInit {
  persons = [
    { fullName: 'John Dow', age: 21 },
    { fullName: 'Patrick Swayze', age: 30 },
    { fullName: 'Chuck Norris', age: 40 },
  ];
  filteredPersons = this.persons;

  constructor(
    private mfeApiService: MfeApiService,
  ) { }

  ngOnInit() {
    this.mfeApiService.patientFilters$
      .pipe(
        tap(() => this.filteredPersons = this.persons),
        filter(filters => Boolean(filters && filters.age)),
      )
      .subscribe((filters: any) => {
        this.filteredPersons = this.persons.filter(person => person.age === filters.age);
      });
  }
}
