import type { ConfigurationOptions } from '@c8y/devkit';
import { author, description, version, name } from './package.json';
import { gettext } from '@c8y/ngx-components/gettext';

const defaultDescription = gettext(
  'The Device Management application provides functionalities for managing and monitoring devices and enables you to control and troubleshoot devices remotely.'
);

export default {
  runTime: {
    author,
    description: description || defaultDescription,
    version,
    name,
    globalTitle: 'Cumulocity',
    rightDrawer: true,
    breadcrumbs: false,
    contentSecurityPolicy:
      "base-uri 'none'; default-src 'self' 'unsafe-inline' http: https: ws: wss:; connect-src 'self' http: https: ws: wss:;  script-src 'self' *.bugherd.com *.twitter.com *.twimg.com *.aptrinsic.com 'unsafe-inline' 'unsafe-eval' data:; style-src * 'unsafe-inline' blob:; img-src * data: blob:; font-src * data:; frame-src *; worker-src 'self' blob:;",
    dynamicOptionsUrl: true,
    contextHelp: true,
    upgrade: true,
    exports: [
      {
        name: 'Replace device plugin',
        module: 'ReplaceDeviceModule',
        path: '@c8y/ngx-components/replace-device',
        description:
          'Replace device plugin for enabling the action of replacing a physical device with another one.',
        scope: 'self' as any
      },
      {
        name: 'Services plugin',
        module: 'ServicesModule',
        path: '@c8y/ngx-components/services',
        description:
          'The Services plugin provides a device tab that lists all services running on a device with their status, name, type and date of the last update.',
        scope: 'self' as any
      },
      {
        name: 'LWM2M plugin',
        module: 'LWM2Module',
        path: '@c8y/ngx-components/protocol-lwm2m',
        description: 'Self scoped LWM2M plugin. Serves Post-operations, configuration and more...',
        scope: 'self' as any
      }
    ],
    remotes: {
      [`lwm2m-ui-plugin@${version.split('.')[0]}-stable`]: ['Lwm2mModuleWrapper'],
      ['c8y-asm-ui@latest']: ['AdvancedSoftwareModule']
    }
  },
  buildTime: {
    federation: [
      '@angular/animations',
      '@angular/cdk',
      '@angular/common',
      '@angular/compiler',
      '@angular/core',
      '@angular/forms',
      '@angular/platform-browser',
      '@angular/platform-browser-dynamic',
      '@angular/router',
      '@angular/upgrade',
      '@c8y/client',
      '@c8y/ngx-components',
      'angular',
      'ngx-bootstrap',
      '@ngx-translate/core',
      '@ngx-formly/core'
    ]
  }
} as const satisfies ConfigurationOptions;
