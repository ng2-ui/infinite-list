import { ElementRef, EventEmitter } from '@angular/core';
export declare class NguiInfiniteListDirective {
    horizontal: boolean;
    enableWindowScroll: boolean;
    disableScrollListener: boolean;
    endVisible: EventEmitter<{}>;
    el: HTMLElement;
    endEl: HTMLElement;
    elementVisible: any;
    /**
     * Creates an instance of NguiInfiniteListDirective.
     * @param {ElementRef} el
     *
     * @memberOf NguiInfiniteListDirective
     */
    constructor(el: ElementRef);
    /**
     * Setup list of sections
     *
     * @memberOf NguiInfiniteListDirective
     */
    ngOnInit(): void;
    /**
     * Handles the scroll listener event.
     *
     * @memberOf NguiInfiniteListDirective
     */
    scrollListener: () => void;
}
