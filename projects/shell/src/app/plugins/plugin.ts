import { LoadRemoteModuleOptions } from '@angular-architects/module-federation';

export type PluginOption = LoadRemoteModuleOptions & {
    displayName: string;
    componentName: string;
};
