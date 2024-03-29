import { __awaiter } from "tslib";
import { TestBed, async } from '@angular/core/testing';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
    let statusBarSpy;
    let splashScreenSpy;
    let platformReadySpy;
    let platformSpy;
    beforeEach(async(() => {
        statusBarSpy = jasmine.createSpyObj('StatusBar', ['styleDefault']);
        splashScreenSpy = jasmine.createSpyObj('SplashScreen', ['hide']);
        platformReadySpy = Promise.resolve();
        platformSpy = jasmine.createSpyObj('Platform', { ready: platformReadySpy });
        TestBed.configureTestingModule({
            declarations: [AppComponent],
            providers: [
                { provide: StatusBar, useValue: statusBarSpy },
                { provide: SplashScreen, useValue: splashScreenSpy },
                { provide: Platform, useValue: platformSpy },
            ],
        }).compileComponents();
    }));
    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });
    it('should initialize the app', () => __awaiter(void 0, void 0, void 0, function* () {
        TestBed.createComponent(AppComponent);
        expect(platformSpy.ready).toHaveBeenCalled();
        yield platformReadySpy;
        expect(statusBarSpy.styleDefault).toHaveBeenCalled();
        expect(splashScreenSpy.hide).toHaveBeenCalled();
    }));
    // TODO: add more tests!
});
//# sourceMappingURL=app.component.spec.js.map