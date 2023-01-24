import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): string {
    // let reversedString = '';
    // const valArray = value.split('');
    // valArray.reverse();
    // reversedString = valArray.join('');
    // return reversedString;
    return value.split('').reverse().join('');
  }

}
