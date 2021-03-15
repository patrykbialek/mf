import { Component } from '@angular/core';
import { StoreService } from '@shared-lib';

import { PluginOption } from './plugins/plugin';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  plugins: PluginOption[] = [];
  workflow: PluginOption[] = [];
  showConfig = false;
  filters: any;

  constructor(
    private storeService: StoreService,
  ) {
  }

  setPatientFilters(age: string | number, date: string) {
    const filters = (age || date)
      ? { age: +age, date: date || null }
      : null;
    this.storeService.setPatientFilters(filters);
    this.filters = filters;
  }
}

