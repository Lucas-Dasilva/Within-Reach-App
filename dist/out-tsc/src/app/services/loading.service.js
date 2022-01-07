import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
let LoadingService = class LoadingService {
    constructor(loadingController) {
        this.loadingController = loadingController;
        this.currentLoading = null;
    }
    present(message = null, duration = null) {
        return __awaiter(this, void 0, void 0, function* () {
            // Dismiss previously created loading
            if (this.currentLoading != null) {
                this.currentLoading.dismiss();
            }
            this.currentLoading = yield this.loadingController.create({
                duration: duration,
                message: message
            });
            return yield this.currentLoading.present();
        });
    }
    dismiss() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.currentLoading != null) {
                yield this.loadingController.dismiss();
                this.currentLoading = null;
            }
            return;
        });
    }
};
LoadingService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], LoadingService);
export { LoadingService };
//# sourceMappingURL=loading.service.js.map