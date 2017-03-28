import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule  } from '@angular/platform-browser';

import { NguiInfiniteListDirective } from "./infinite-list.directive";

export {
  NguiInfiniteListDirective,
};

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [NguiInfiniteListDirective],
  exports:  [NguiInfiniteListDirective]
})
export class NguiInfiniteListModule {}
