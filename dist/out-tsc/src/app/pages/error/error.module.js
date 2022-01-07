import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ErrorPageRoutingModule } from './error-routing.module';
import { ErrorPage } from './error.page';
let ErrorPageModule = class ErrorPageModule {
};
ErrorPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ErrorPageRoutingModule
        ],
        declarations: [ErrorPage]
    })
], ErrorPageModule);
export { ErrorPageModule };
//# sourceMappingURL=error.module.js.map