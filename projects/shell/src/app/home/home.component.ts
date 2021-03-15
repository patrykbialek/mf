import { Component, OnInit } from '@angular/core';
import { StoreService } from '@shared-lib';

import { LookupService } from '../plugins/lookup.service';
import { PluginOption } from '../plugins/plugin';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  plugins: PluginOption[] = [];
  workflow: PluginOption[] = [];
  showConfig = false;

  patientFilters = this.storeService.patientFilters$
    .subscribe(data => console.log('home', data));

  constructor(
    private lookupService: LookupService,
    private storeService: StoreService,
  ) {
  }

  async ngOnInit(): Promise<void> {
    this.plugins = await this.lookupService.lookup();
    this.plugins.forEach(plugin => this.add(plugin));
  }

  add(plugin: PluginOption): void {
    this.workflow.push(plugin);
  }

}

