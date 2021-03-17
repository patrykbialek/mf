import { filter, tap } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';
import { MfeApiService } from '@shared-lib';

import { LookupService } from './plugins/lookup.service';
import { PluginOption } from './plugins/plugin';

@Component({
  selector: 'app-patients',
  template: `
        <h1>Patients</h1>
        <div class="task">
          <div *ngFor="let person of filteredPersons">{{ person.fullName }} (age {{ person.age }})</div>
        </div>

        <ng-container *ngIf="plugin">    
          <plugin-proxy [option]="plugin"></plugin-proxy>
        </ng-container>

        `
})

export class PatientsComponent implements OnInit {
  plugin: PluginOption;
  persons = [
    { fullName: 'John Dow', age: 21 },
    { fullName: 'Patrick Swayze', age: 30 },
    { fullName: 'Chuck Norris', age: 40 },
  ];
  filteredPersons = this.persons;

  constructor(
    private lookupService: LookupService,
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
    this.loadModule('Meetings');
  }

  async loadModule(componentName: string): Promise<void> {
    const plugins: PluginOption[] = await this.lookupService.lookup();
    this.plugin = plugins.find(plugin => plugin.displayName === componentName);
  }
}
