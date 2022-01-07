import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Device } = Plugins;
let LocationPage = class LocationPage {
    constructor(location, postData, nav, user) {
        this.location = location;
        this.postData = postData;
        this.nav = nav;
        this.user = user;
        this.url = 'http://127.0.0.1:5000/';
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.user.userInfo();
            this.postData.createUserRequest(this.user.uuid);
        });
    }
    getLocation() {
        return __awaiter(this, void 0, void 0, function* () {
            //Promise: type for asyncrinous function, must have await and async to define it as a variable
            //no need to save to database, just run getLocation() everry time I calc distance from post
            try {
                this.latitude = this.location.currentLocation.latitude;
                this.longitude = this.location.currentLocation.longitude;
                this.nav.navigateRoot('home');
            }
            catch (_a) {
                this.nav.navigateRoot('error');
            }
        });
    }
};
LocationPage = __decorate([
    Component({
        selector: 'app-location',
        templateUrl: './location.page.html',
        styleUrls: ['./location.page.scss'],
    })
], LocationPage);
export { LocationPage };
//# sourceMappingURL=location.page.js.map