import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(comidas:any[], field:string, name:string): any {
    
    if(!comidas) return [];
    if(!name) return comidas;

    const exReg = new RegExp(name, "i");
    return comidas.filter(comida=>exReg.test(comida[field]));

    //return null;
  }

}
