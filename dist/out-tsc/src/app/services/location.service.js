import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Observable } from 'rxjs';
const { Geolocation } = Plugins;
let LocationService = class LocationService {
    constructor() {
        //getCoords() returns a promise, so to access it, we use .then()
        this.getCoords().then((val) => {
            this.currentLoc = val;
        });
        this.coordinates$ = new Observable();
        this.allowBackgroundGeo = true;
        this.coordinates$ = new Observable((obs) => {
            this.watchId = Geolocation.watchPosition({
                enableHighAccuracy: true
            }, (pos) => {
                this.currentLoc = {
                    latitude: pos.coords.latitude,
                    longitude: pos.coords.longitude
                };
                obs.next(this.currentLoc);
            });
        });
    }
    startBackgroundGeo() {
        this.setBackgroundMode(true);
    }
    stopBackgroundGeo() {
        this.setBackgroundMode(false);
    }
    setBackgroundMode(allowed) {
        this.allowBackgroundGeo = allowed;
        if (allowed) {
            this.coordinates$ = new Observable((obs) => {
                this.watchId = Geolocation.watchPosition({
                    enableHighAccuracy: true
                }, (pos) => {
                    if (pos) {
                        this.currentLoc = {
                            latitude: pos.coords.latitude,
                            longitude: pos.coords.longitude
                        };
                        obs.next(this.currentLoc);
                    }
                });
            });
        }
        else {
            Geolocation.clearWatch({
                id: this.watchId
            });
        }
    }
    getBackgroundMode() {
        return this.allowBackgroundGeo;
    }
    /**
     * Gets the current user coordinates.
     * When you don't want to subscribe to an observable
     * and just want a one off location request.
     *
     * @returns A promise containing the user's current location.
     */
    getCoords() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield Geolocation.getCurrentPosition({
                enableHighAccuracy: true
            });
            const coords = {
                latitude: res.coords.latitude,
                longitude: res.coords.longitude
            };
            this.currentLoc = coords;
            return coords;
        });
    }
    get currentLocation() {
        if (this.currentLoc) {
            // console.log(this.currentLoc)
            return this.currentLoc;
        }
        else {
            console.log("Failed");
        }
    }
    /**
     * Observable for the current GPS coordinates.
     * Will run in background if the background service
     * is available for the current platform.
     */
    get observeLocation() { return this.coordinates$; }
};
LocationService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], LocationService);
export { LocationService };
// const coordinates = await Geolocation.getCurrentPosition({enableHighAccuracy: true, timeout: 5000, maximumAge: 0});
// console.log('Current', coordinates);
// return coordinates;
// async getCurrentPosition() {
//   await Geolocation.getCurrentPosition()
//   .then((position)=>{
//     console.log(position)
//     return position
//   })
//   .catch(()=>{
//     this.watchId = Geolocation.watchPosition({
//       enableHighAccuracy: true
//     }, position => {
//       console.log(position);
//       return position;
//     });
//   });
// }
//# sourceMappingURL=location.service.js.map