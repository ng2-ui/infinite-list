import { ElementRef, EventEmitter } from '@angular/core';
export declare class NguiInfiniteListDirective {
    horizontal: boolean;
    endVisible: EventEmitter<{}>;
    el: HTMLElement;
    endEl: HTMLElement;
    elementVisible: any;
    constructor(el: ElementRef);
    ngOnInit(): void;
    scrollListener: () => void;
}
