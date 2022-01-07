import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommentsPage } from './comments.page';
const routes = [
    {
        path: '',
        component: CommentsPage
    }
];
let CommentsPageRoutingModule = class CommentsPageRoutingModule {
};
CommentsPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], CommentsPageRoutingModule);
export { CommentsPageRoutingModule };
//# sourceMappingURL=comments-routing.module.js.map