import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeModule, downgradeComponent } from '@angular/upgrade/static';
import { AppComponent } from './app.component';
import {DemoComponent} from './demo/demo.component';
import {testServiceProvider} from './test.service'

declare var angular: any;
angular.module('app')
  .directive(
    'demo',
    downgradeComponent({component: DemoComponent})
  );

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  entryComponents: [
    DemoComponent 
  ],
  providers: [
    testServiceProvider
  ],
  // bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private upgrade: UpgradeModule) { }
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['app'], { strictDi: true });
  }
}
