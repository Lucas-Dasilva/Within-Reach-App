import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommentsPageRoutingModule } from './comments-routing.module';
import { CommentsPage } from './comments.page';
import { ComponentsModule } from 'src/app/component.module';
let CommentsPageModule = class CommentsPageModule {
};
CommentsPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            CommentsPageRoutingModule,
            ComponentsModule
        ],
        declarations: [CommentsPage],
    })
], CommentsPageModule);
export { CommentsPageModule };
//# sourceMappingURL=comments.module.js.map