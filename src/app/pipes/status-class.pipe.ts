import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'statusClass'
})
export class statusClassPipe implements PipeTransform {
  transform(status: number): string {
    console.log('statusClassPipe');
    // if(status === 1) {
    //   return 'active';
    // } else if(status === 2) {
    //   return 'partial';
    // } else {
    //   return 'blocked';
    // }

    const objStatus: {[key: number]: string} = {
      1: 'active',
      2: 'partial',
      3: 'blocked'
    }

    return objStatus[status]
  }
}
