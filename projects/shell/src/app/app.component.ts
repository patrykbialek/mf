import { filter } from 'rxjs/operators';

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { StoreService } from '@shared-lib';

import { PluginOption } from './plugins/plugin';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  plugins: PluginOption[] = [];
  workflow: PluginOption[] = [];
  showConfig = false;
  filters: any;

  @ViewChild('date') date: ElementRef;

  constructor(
    private storeService: StoreService,
  ) { }

  ngOnInit() {
    this.storeService.patientFilters$
      .pipe(filter(data => Boolean(data)))
      .subscribe(data => this.date.nativeElement.value = data.date);
  }

  setPatientFilters(age: string | number, date: string) {
    const filters = (age || date)
      ? { age: +age, date: date || null }
      : null;
    this.storeService.setPatientFilters(filters);
    this.filters = filters;
  }
}

