import { PluginOptions } from './plugins/plugin';
import { Component, OnInit } from '@angular/core';
import { LookupService } from './plugins/lookup.service';
import { StoreService } from '@shared-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  plugins: PluginOptions[] = [];
  workflow: PluginOptions[] = [];
  showConfig = false;

  patientFilters = this.storeService.patientFilters$
    .subscribe(data => console.log('app', data))

  constructor(
    private lookupService: LookupService,
    private storeService: StoreService,
  ) {
  }

  async ngOnInit(): Promise<void> {
    this.plugins = await this.lookupService.lookup();

    this.add({
      remoteEntry: 'http://localhost:3000/remoteEntry.js',
      remoteName: 'mfe1',
      exposedModule: './Download',

      displayName: 'Download',
      componentName: 'DownloadComponent'
    });
  }

  add(plugin: PluginOptions): void {
    this.workflow.push(plugin);
  }

  toggle(): void {
    this.showConfig = !this.showConfig;
  }

  setPatientFilters(age: string | number) {
    const filters = age
      ? { age: +age }
      : null;
    this.storeService.setPatientFilters(filters);
  }
}

