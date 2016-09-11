// The browser platform with a compiler
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from "@angular/forms";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent }   from './app.component';

//noinspection TypeScriptCheckImport
import { Ng2InfiniteListModule } from 'ng2-infinite-list';

@NgModule({
  imports: [BrowserModule, FormsModule, Ng2InfiniteListModule],
  declarations: [AppComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
