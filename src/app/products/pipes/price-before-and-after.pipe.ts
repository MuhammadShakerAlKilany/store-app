import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceBeforeAndAfter'
})
export class PriceBeforeAndAfterPipe implements PipeTransform {

  transform(value: number|undefined, ...args: number[]): string {
    if(args[0]&&value){
      let newPrice = Math.floor(value*((100-args[0])/100))
      return "old Price"+value+" new price: "+newPrice
        
    }else{

      return String(value) ;
    }
  }

}
