import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LocationPageRoutingModule } from './location-routing.module';
import { LocationPage } from './location.page';
let LocationPageModule = class LocationPageModule {
};
LocationPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            LocationPageRoutingModule
        ],
        declarations: [LocationPage],
    })
], LocationPageModule);
export { LocationPageModule };
//# sourceMappingURL=location.module.js.map