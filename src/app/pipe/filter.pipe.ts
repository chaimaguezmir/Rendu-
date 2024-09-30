import { Pipe, PipeTransform } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { __values } from 'tslib';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(values:any[] ,titre:string) {
    if(titre==''){
      return values;
    }
    return values.filter((e)=>e.title.toLowerCase()==titre.toLowerCase() );
  }

}
