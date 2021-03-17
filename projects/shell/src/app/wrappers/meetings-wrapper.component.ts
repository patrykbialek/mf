

import { Component, OnInit } from '@angular/core';

import { LookupService } from '../plugins/lookup.service';
import { CommonWrapperComponent } from './common-wrapper.component';

const COMPONENT_NAME = "Meetings";

@Component({
    selector: 'shell-meetings',
    template: `
    <ng-container *ngIf="plugin">    
        <plugin-proxy [option]="plugin"></plugin-proxy>
    </ng-container>
    `
})

export class MeetingsWrapperComponent
    extends CommonWrapperComponent
    implements OnInit {

    constructor(public lookupService: LookupService) { super(lookupService); }

    ngOnInit(): void {
        this.loadModule(COMPONENT_NAME);
    }
}