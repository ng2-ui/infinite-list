"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var infinite_list_directive_1 = require("./infinite-list.directive");
exports.NguiInfiniteListDirective = infinite_list_directive_1.NguiInfiniteListDirective;
var NguiInfiniteListModule = (function () {
    function NguiInfiniteListModule() {
    }
    return NguiInfiniteListModule;
}());
NguiInfiniteListModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
                declarations: [infinite_list_directive_1.NguiInfiniteListDirective],
                exports: [infinite_list_directive_1.NguiInfiniteListDirective]
            },] },
];
/** @nocollapse */
NguiInfiniteListModule.ctorParameters = function () { return []; };
exports.NguiInfiniteListModule = NguiInfiniteListModule;
//# sourceMappingURL=index.js.map