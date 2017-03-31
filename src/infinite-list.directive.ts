import {Directive, ElementRef, EventEmitter, Output, Input} from '@angular/core';
import { elementVisible } from "@ngui/utils";

@Directive({ selector: '[ngui-infinite-list]' })
export class NguiInfiniteListDirective {

  @Input() horizontal: boolean;
  @Input() enableWindowScroll : boolean = false;
  @Output() endVisible = new EventEmitter();

  el: HTMLElement;
  endEl: HTMLElement;
  elementVisible: any = elementVisible;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
    
  }

  // setup list of sections
  ngOnInit(): void {
    this.endEl = <HTMLElement>this.el.querySelector('[ngui-infinite-list-end]');
    if (!this.endEl) { throw "Invalid 'ngui-infinite-list-end";}
    this.scrollListener();

    if(this.enableWindowScroll){
      window.addEventListener('scroll',this.scrollListener);
    } else{
      this.el.addEventListener('scroll', this.scrollListener);
    }
    
    window.addEventListener('resize', this.scrollListener);
  }
  
  scrollListener = () => {
    let visible;
    if(this.enableWindowScroll){
      visible = this.elementVisible(this.endEl,window)
    } else {
      visible = this.elementVisible(this.endEl, this.el);
    }
    
    if (this.horizontal && (visible.left || visible.right)) {
      this.endVisible.emit(true); 
    } else if (!this.horizontal && (visible.top || visible.bottom)) {
      this.endVisible.emit(true); 
    }
  }
  
}
