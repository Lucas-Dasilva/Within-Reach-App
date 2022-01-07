import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Device } = Plugins;
let UserService = class UserService {
    constructor() { }
    userInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            const info = yield Device.getInfo();
            // this.uuid = "user1";
            this.uuid = info["uuid"];
        });
    }
};
UserService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map