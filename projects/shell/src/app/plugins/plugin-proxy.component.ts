import { Component, ViewChild, ViewContainerRef, Inject, Injector, ComponentFactoryResolver, OnInit, OnChanges, Input } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { PluginOptions } from './plugin';

@Component({
  selector: 'plugin-proxy',
  template: `
        <ng-container #placeHolder></ng-container>
    `
})
export class PluginProxyComponent implements OnChanges {
  @ViewChild('placeHolder', { read: ViewContainerRef, static: true })
  viewContainer: ViewContainerRef;

  @Input() options: PluginOptions;

  constructor(
    @Inject(Injector) private injector,
    @Inject(ComponentFactoryResolver) private cfr) { }

  search() {
    alert('Not implemented for this demo!');
  }

  async ngOnChanges() {
    this.viewContainer.clear();

    // const Component = await loadRemoteModule(this.options)
    //     .then(m => m[this.options.componentName]);

    // Ivy --> ViewEngine
    // const factory = this.cfr.resolveComponentFactory(Component);

    // const compRef = this.viewContainer.createComponent(factory, null, this.injector);
    // const compInstance = compRef.instance;
    // compInstance.a = 'xx'
    // compInstance.onChange.subscribe(...)
    // compInstance.m();

    const Component = await loadRemoteModule(this.options)
        .then(m => m[this.options.componentName]);

    const factory = this.cfr.resolveComponentFactory(Component);
    this.viewContainer.createComponent(factory, null, this.injector);

  }
}

