import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';

import { StatetransferBrowserModule } from './statetransfer/statetransfer-browser.module';

@NgModule({
	bootstrap: [ AppComponent ],
	imports: [
    BrowserModule.withServerTransition({
      appId: 'angular-plate'
    }),
    AppModule,
    StatetransferBrowserModule
	]
})
export class BrowserAppModule {}
