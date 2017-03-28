// polyfills, comment the following out for debugging purpose
import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

// The browser platform with a compiler
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from "@angular/forms";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent }   from './app.component';

//noinspection TypeScriptCheckImport
import { NguiInfiniteListModule } from '@ngui/infinite-list';

@NgModule({
  imports: [BrowserModule, FormsModule, NguiInfiniteListModule],
  declarations: [AppComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
