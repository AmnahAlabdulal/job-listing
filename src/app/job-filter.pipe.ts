import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jobFilter',
  pure: false
})
export class JobFilterPipe implements PipeTransform {

  transform(list: any[], filters: any[]): any {
    if (filters.length > 0) {
      return list.filter(job => {
        if (job.tools.some(tool => filters.includes(tool)) || job.languages.some(lng => filters.includes(lng))) {
          return true
        } else {
          return false;
        }
      });
    } else {
      return list;
    }
  }
}

