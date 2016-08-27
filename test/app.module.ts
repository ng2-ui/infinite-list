import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from "@angular/forms";

import { AppComponent }   from './app.component';
import { Ng2InfiniteListModule } from 'ng2-infinite-list';

@NgModule({
  imports: [BrowserModule, FormsModule, Ng2InfiniteListModule],
  declarations: [AppComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }