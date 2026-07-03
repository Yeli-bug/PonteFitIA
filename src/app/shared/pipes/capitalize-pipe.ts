import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {

  transform(value:string | null | undefined): string {
    if (value && value.trim().length > 0) {
      let firstLetter = value.charAt(0).toUpperCase();
      let restOfString = value.slice(1);
      return firstLetter + restOfString;
    } else {
      return "Not specified";
    }
  }

}
