# ng2-infinite-list
Angular2 Infinite List directive

<a href="http://plnkr.co/edit/3LTMdS?p=preview">
  <img src="http://i.imgur.com/5SDqQ6t.png"width="50% border="1" />
</a>

## Install

1. install ng2-infinite-list

        $ npm install ng2-infinite-list --save

2. add `map` and `packages` to your `systemjs.config.js`

        map['ng2-infinite-list'] = 'node_modules/ng2-infinite-list'
        packages['ng2-infinite-list'] = { main: 'dist/index.js', defaultExtension: 'js']

## Use it in your code

Import directives and add `ng2-infinite-list` to your component

        import { Ng2InfiniteListDirective} from 'ng2-infinite-list';

        @Component({
          selector: 'my-app',
          directives: [Ng2InfiniteListDirective],
          template: `
            <ul ng2-infinite-list  class="infinite-list"
             (endVisible)="loadMore(set1)">
              <li *ngFor="let item of set1.list">{{item+1}}</li>
              <div ng2-infinite-list-end>
                <div *ngIf="set1.loadingInProgress">Loading</div>
                <div *ngIf="set1.endOfList">End Of List</div>
              </div>
            </ul>`
        })

## For Developers

### To start

    $ git clone https://github.com/ng2-ui/ng2-infinite-list.git
    $ cd ng2-infinite-list
    $ npm install
    $ npm start

