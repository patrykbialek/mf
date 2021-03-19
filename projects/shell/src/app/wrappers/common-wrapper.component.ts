

import { Component } from '@angular/core';

import { LookupService } from '../plugins/lookup.service';
import { PluginOption } from '../plugins/plugin';

@Component({
    selector: 'shell-common-wrapper',
    template: ``,
})

export class CommonWrapperComponent {

    plugin: PluginOption;

    constructor(
        public lookupService: LookupService,
    ) { }

    async loadModule(componentName: string): Promise<void> {
        const plugins: PluginOption[] = await this.lookupService.lookup();
        this.plugin = plugins.find(plugin => plugin.displayName === componentName);
        console.log('plugin', this.plugin)
    }
}