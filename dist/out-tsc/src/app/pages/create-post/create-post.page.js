import { __awaiter, __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
let CreatePostPage = class CreatePostPage {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.postBody = "";
    }
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.modalCtrl.dismiss();
        });
    }
    send() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.postBody.length != 0) {
                yield this.modalCtrl.dismiss({ postBod: this.postBody });
            }
        });
    }
    ionViewDidEnter() {
        setTimeout(() => this.textArea.setFocus(), 300);
    }
    ngOnInit() { }
};
__decorate([
    ViewChild('autofocus', { static: true })
], CreatePostPage.prototype, "textArea", void 0);
CreatePostPage = __decorate([
    Component({
        selector: 'app-create-post',
        templateUrl: './create-post.page.html',
        styleUrls: ['./create-post.page.scss'],
    })
], CreatePostPage);
export { CreatePostPage };
//# sourceMappingURL=create-post.page.js.map