# infinite-list
Angular2 Infinite List directive

## IMPORTANT NOTICE

After 0.6.0 or higher, `ng2-infinite-list` has been changed to `@ngui/infinite-list`. Here are the changes;

* Module `ng2-infinite-list` is changed to `@ngui/infinite-list`.
* Direvtive `ng2-infinite-list` is changed to `ngui-infinite-list`.
* Class name `Ng2InfiniteListModule` is changed to `NguiInfiniteListModule`.

<a href="https://rawgit.com/ng2-ui/infinite-list/master/app/index.html">
  <img src="http://i.imgur.com/5SDqQ6t.png"width="50% border="1" />
</a> 

Plunker Example: http://plnkr.co/edit/3LTMdS?p=preview

## Install

1. install @ngui/infinite-list

        $ npm install @ngui/infinite-list --save

2. add `map` and `packages` to your `systemjs.config.js`

        map['@ngui/infinite-list'] = 'node_modules/@ngui/infinite-list/dist/infinite-list.umd.js';

3. import NguiInfiniteList to your AppModule

        import { NgModule } from '@angular/core';
        import { FormsModule } from "@angular/forms";
        import { BrowserModule  } from '@angular/platform-browser';
        import { AppComponent } from './app.component';
        import { NguiInfiniteListModule } from '@ngui/infinite-list';
        
        @NgModule({
          imports: [BrowserModule, FormsModule, NguiInfiniteListModule],
          declarations: [AppComponent],
          bootstrap: [ AppComponent ]
        })
        export class AppModule { }

## Use it in your template
 
     <input auto-complete [(ngModel)]="myData" [source]="mySource" />
         
For full example, please check out `test` directory to see the example of;

  - `systemjs.config.js`
  - `app.module.ts`
  -  and `app.component.ts`.

## **ng2-ui** welcomes new members and contributors

This module is only improved and maintained by contributors like you.

As a contributor, it's NOT required to be skilled in Javascript nor Angular2. 
You are only to be open-minded and interested in helping others.
As a contributor, you do following;

  * Updating README.md
  * Improving code comments
  * Answering issues and building FAQ
  * Documentation
  * Translation

In result of your active contribution, you will be listed as a core contributor
on https://ng2-ui.github.io, and a member of ng2-ui too.

If you are interested in becoming a contributor and/or a member of ng-ui,
please send me email to `allenhwkim AT gmail.com` with your github id. 


## Use it in your code

    <ul ngui-infinite-list  class="infinite-list"
     (endVisible)="loadMore(set1)">
      <li *ngFor="let item of set1.list">{{item+1}}</li>
      <div ngui-infinite-list-end>
        <div *ngIf="set1.loadingInProgress">Loading</div>
        <div *ngIf="set1.endOfList">End Of List</div>
      </div>
    </ul>`

## For Developers

### To start

    $ git clone https://github.com/ng2-ui/infinite-list.git
    $ cd infinite-list
    $ npm install
    $ npm start

