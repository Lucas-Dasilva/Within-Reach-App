import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CreatePostPageRoutingModule } from './create-post-routing.module';
import { CreatePostPage } from './create-post.page';
let CreatePostPageModule = class CreatePostPageModule {
};
CreatePostPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            CreatePostPageRoutingModule
        ],
        declarations: [CreatePostPage],
    })
], CreatePostPageModule);
export { CreatePostPageModule };
//# sourceMappingURL=create-post.module.js.map