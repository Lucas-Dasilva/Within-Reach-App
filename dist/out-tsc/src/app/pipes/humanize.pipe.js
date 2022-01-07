import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
import { humanizer } from 'humanize-duration';
let HumanizePipe = class HumanizePipe {
    constructor() {
        this.shortEnglishHumanizer = humanizer({
            language: "shortEn",
            languages: {
                shortEn: {
                    y: () => "y",
                    mo: () => "mo",
                    w: () => "w",
                    d: () => "d",
                    h: () => "h",
                    m: () => "m",
                    s: () => "s",
                    ms: () => "ms",
                },
            },
        });
    }
    transform(date) {
        const d = new Date(date);
        return this.shortEnglishHumanizer(Date.now() - d.getTime(), { largest: 1, round: true });
    }
};
HumanizePipe = __decorate([
    Pipe({
        name: 'datepipe'
    })
], HumanizePipe);
export { HumanizePipe };
//# sourceMappingURL=humanize.pipe.js.map