import { Pipe, PipeTransform } from '@angular/core';
import {humanizer} from 'humanize-duration';

@Pipe({
  name: 'datepipe'
})
export class HumanizePipe implements PipeTransform {
  private shortEnglishHumanizer: any=
   humanizer({
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
  transform(date: string): string {
    
    const d = new Date(date);
    return this.shortEnglishHumanizer(Date.now() - d.getTime(), { largest: 1, round: true });

  }

}
