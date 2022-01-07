import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreatePostPage } from './create-post.page';
const routes = [
    {
        path: '',
        component: CreatePostPage
    }
];
let CreatePostPageRoutingModule = class CreatePostPageRoutingModule {
};
CreatePostPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], CreatePostPageRoutingModule);
export { CreatePostPageRoutingModule };
//# sourceMappingURL=create-post-routing.module.js.map