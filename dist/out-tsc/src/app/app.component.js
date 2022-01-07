import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar) {
        // if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {console.log('🎉 Dark mode is supported');}
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        // // Use matchMedia to check the user preference
        // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        // toggleDarkTheme(prefersDark.matches);
        // // Listen for changes to the prefers-color-scheme media query
        // //prefersDark.addListener((mediaQuery) => toggleDarkTheme(mediaQuery.matches));
        // // Add or remove the "dark" class based on if the media query matches
        // function toggleDarkTheme(shouldAdd) {
        //   document.body.classList.toggle('dark', shouldAdd);
        //}
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: 'app.component.html',
        styleUrls: ['app.component.scss']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map