import { Component, OnInit } from '@angular/core';
import { MfeApiService } from '@shared-lib';
import { filter, tap } from 'rxjs/operators';

@Component({
  selector: 'mfe1-download',
  template: `
        <div class="task">
            <img src="http://localhost:3000/assets/download.png">
            <p>Download</p>

            <div>
              <div *ngFor="let person of filteredPersons">{{ person.fullName }} (age {{ person.age }})</div>
            </div>
        </div>
    `
})

export class DownloadComponent implements OnInit {
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
        filter(filters => Boolean(filters)),
      )
      .subscribe((filters: any) => {
        this.filteredPersons = this.persons.filter(person => person.age === filters.age)
      });
  }
}
