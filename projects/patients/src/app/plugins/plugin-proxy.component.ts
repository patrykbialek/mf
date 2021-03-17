import { loadRemoteModule } from '@angular-architects/module-federation';
import {
    Component, ComponentFactoryResolver, Inject, Injector, Input, OnChanges, ViewChild,
    ViewContainerRef,
} from '@angular/core';

import { PluginOption } from './plugin';

@Component({
  selector: 'plugin-proxy',
  template: `
        <ng-container #placeHolder></ng-container>
    `
})
export class PluginProxyComponent implements OnChanges {
  @ViewChild('placeHolder', { read: ViewContainerRef, static: true })
  viewContainer: ViewContainerRef;

  @Input() option: PluginOption;

  constructor(
    @Inject(Injector) private injector,
    @Inject(ComponentFactoryResolver) private cfr) { }

  async ngOnChanges() {
    this.viewContainer.clear();

    const Component = await loadRemoteModule(this.option)
        .then(m => {
          console.log(m)
          return m[this.option.componentName];
        });

    const factory = this.cfr.resolveComponentFactory(Component);
    this.viewContainer.createComponent(factory, null, this.injector);

  }
}

