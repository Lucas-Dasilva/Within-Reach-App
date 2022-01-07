import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ErrorPage } from './error.page';
const routes = [
    {
        path: '',
        component: ErrorPage
    }
];
let ErrorPageRoutingModule = class ErrorPageRoutingModule {
};
ErrorPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ErrorPageRoutingModule);
export { ErrorPageRoutingModule };
//# sourceMappingURL=error-routing.module.js.map