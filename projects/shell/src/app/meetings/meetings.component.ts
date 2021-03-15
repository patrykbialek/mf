

import { Component, OnInit } from '@angular/core';
import { StoreService } from '@shared-lib';

import { LookupService } from '../plugins/lookup.service';
import { PluginOption } from '../plugins/plugin';

const COMPONENT_NAME = "Meetings";

@Component({
    selector: 'shell-meetings',
    template: `
    <ng-container *ngIf="plugin">    
        <plugin-proxy [option]="plugin"></plugin-proxy>
    </ng-container>
    `
})

export class MeetingsComponent implements OnInit {

    plugin: PluginOption;

    patientFilters = this.storeService.patientFilters$
        .subscribe(data => console.log('home', data));

    constructor(
        private lookupService: LookupService,
        private storeService: StoreService,
    ) { }

    async ngOnInit(): Promise<void> {
        const plugins: PluginOption[] = await this.lookupService.lookup();
        this.plugin = plugins.find(plugin => plugin.displayName === COMPONENT_NAME);
    }
}