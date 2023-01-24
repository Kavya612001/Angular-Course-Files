import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: any, property: string): any {
    return value.sort((a,b) => {
      return a[property] > b[property] ? 1 : -1;
    });
  }
}
