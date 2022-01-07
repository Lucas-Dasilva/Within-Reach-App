// components.moudle.ts
// Note that we also need to provide the
// shared PipesModule sice the components use it.
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { VoteButtonComponent } from 'src/app/vote-button/vote-button.component';
import { ReplyVoteButtonComponent } from 'src/app/reply-vote-button/reply-vote-button.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HumanizePipe } from './pipes/humanize.pipe';
let ComponentsModule = class ComponentsModule {
};
ComponentsModule = __decorate([
    NgModule({
        //declarations are to make directives (including components and pipes) from the current module available to other directives in the current module
        declarations: [VoteButtonComponent, ReplyVoteButtonComponent, HumanizePipe],
        //imports makes the exported declarations of other modules available in the current module
        imports: [IonicModule, CommonModule],
        exports: [VoteButtonComponent, ReplyVoteButtonComponent, HumanizePipe]
    })
], ComponentsModule);
export { ComponentsModule };
//# sourceMappingURL=component.module.js.map