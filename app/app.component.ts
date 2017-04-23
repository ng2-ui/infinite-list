import {Component, Type} from '@angular/core'

@Component({
  selector: 'my-app',
  template: `
<ul ngui-infinite-list class="infinite-list" [disableScrollListener]="set1.loadingInProgress"
 (endVisible)="loadMore(set1)">
  <li *ngFor="let item of set1.list">{{item+1}}</li>
  <div ngui-infinite-list-end>
    <div *ngIf="set1.loadingInProgress">Loading</div>
    <div *ngIf="set1.endOfList">End Of List</div>
  </div>
</ul>
loading in progress : {{set1.loadingInProgress}}

<div ngui-infinite-list horizontal="true" class="infinite-list horizontal" [disableScrollListener]="set2.loadingInProgress"
  (endVisible)="loadMore(set2)">
  <div *ngFor="let item of set2.list">{{item+1}}</div>
  <div ngui-infinite-list-end>
    &nbsp;
    <div *ngIf="set2.loadingInProgress">Loading</div>
    <div *ngIf="set2.endOfList">End Of List</div>
  </div>
</div>
loading in progress : {{set2.loadingInProgress}}
`,
  styles: [`
.infinite-list {
  overflow: auto;
  border: 10px solid #333;
  height: 200px;
  position: relative;
}
.infinite-list > * {
  min-height: 20px
}

.infinite-list > *:nth-child(odd) {
  background-color: #eee
}

.infinite-list.horizontal {
  height: 100px;
  white-space: nowrap;
  overflow-y: hidden;
}
.infinite-list.horizontal > div {
  border: 1px solid #666;
  width: 50px;
  height: 80px;
  display: inline-block;
  margin: 10px;
  vertical-align: top;
}`]
})
export class AppComponent {
  set1: any = {
    limit: 10, offset: 0, endOfList: false, loadingInProgress: false, list: []
  };
  set2: any = {
    limit: 10, offset: 0, endOfList: false, loadingInProgress: false, list: []
  };

  loadMore(data) {
    if (data.offset > 99) {    // detect the end of list
      data.endOfList = true;
    } else {
      setTimeout(() => data.loadingInProgress = true);
      setTimeout(() => {      // mimics http call delay
        let max = data.offset + data.limit;
        for (let i = data.offset; i < max; i++) {
          data.list.push(i);
        }
        data.offset = max;
        data.loadingInProgress = false;
      }, 1000);
    }
  }
}