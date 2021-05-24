import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Observable, Observer  } from 'rxjs';

const { Geolocation } = Plugins;


export interface Coords {
  latitude: number;
  longitude: number;
}

@Injectable({
  providedIn: 'root'
})

export class LocationService {
  private coordinates$: Observable<Coords>;
  private allowBackgroundGeo: boolean;
  private currentLoc: Coords;
  private watchId: string;

  constructor() {
      //getCoords() returns a promise, so to access it, we use .then()
      this.getCoords().then((val) => {
        this.currentLoc = val;
      });

      this.coordinates$ = new Observable();
      this.allowBackgroundGeo = true;
      this.coordinates$ = new Observable((obs: Observer<Coords>) => {
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

    public startBackgroundGeo() {
      this.setBackgroundMode(true);
    }

    public stopBackgroundGeo() {
      this.setBackgroundMode(false);
    }

    public setBackgroundMode(allowed: boolean) {
      this.allowBackgroundGeo = allowed;
      if (allowed) {
        this.coordinates$ = new Observable((obs: Observer<Coords>) => {
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
      } else {
        Geolocation.clearWatch({
          id: this.watchId
        });
      }
    }

    public getBackgroundMode() {
      return this.allowBackgroundGeo;
    }

    /**
     * Gets the current user coordinates.
     * When you don't want to subscribe to an observable
     * and just want a one off location request.
     *
     * @returns A promise containing the user's current location.
     */
    public async getCoords(): Promise<Coords> {
      const res = await Geolocation.getCurrentPosition({
        enableHighAccuracy: true
      });
      const coords = {
        latitude: res.coords.latitude,
        longitude: res.coords.longitude
      };
      this.currentLoc = coords;
      return coords;
    }

    get currentLocation(): Coords {
      if (this.currentLoc){
        // console.log(this.currentLoc)
        return this.currentLoc;

      }
      else{
        console.log("Failed")

      }
    }

    /**
     * Observable for the current GPS coordinates.
     * Will run in background if the background service
     * is available for the current platform.
     */
    get observeLocation() { return this.coordinates$; }
}
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