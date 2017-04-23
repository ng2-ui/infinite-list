import {Directive, ElementRef, EventEmitter, Output, Input} from '@angular/core';
import { elementVisible } from "@ngui/utils";

@Directive({ selector: '[ngui-infinite-list]' })
export class NguiInfiniteListDirective {

  @Input() 
  public horizontal: boolean;
  @Input() 
  public enableWindowScroll : boolean = false;
  @Input() 
  public disableScrollListener: boolean = false;
  
  @Output() 
  public endVisible = new EventEmitter();

  public el: HTMLElement;
  public endEl: HTMLElement;
  public elementVisible: any = elementVisible;


  /**
   * Creates an instance of NguiInfiniteListDirective.
   * @param {ElementRef} el 
   * 
   * @memberOf NguiInfiniteListDirective
   */
  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }

  /**
   * Setup list of sections
   * 
   * @memberOf NguiInfiniteListDirective
   */
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
  

  /**
   * Handles the scroll listener event.
   * 
   * @memberOf NguiInfiniteListDirective
   */
  scrollListener = () => {
    if (!this.disableScrollListener) {
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
  
}