import { Component, OnInit } from '@angular/core';

import { LookupService } from '../plugins/lookup.service';
import { PluginOption } from '../plugins/plugin';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html'
})
export class ConfigComponent implements OnInit {

  constructor(private lookupService: LookupService) { }

  config: PluginOption[];

  async ngOnInit() {
    this.config = await this.lookupService.lookup();
  }

}
