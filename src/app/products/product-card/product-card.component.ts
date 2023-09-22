import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Protuc } from 'src/app/interface/protuc';
import {IconDefinition, faStar ,faStarHalf } from '@fortawesome/free-regular-svg-icons'
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnChanges , OnInit{
@Input() protuct!:Protuc
starRating:any[]=[]
rating=0
constructor(){
  
}
  ngOnInit(): void {
   
   
  }
  ngOnChanges(changes: SimpleChanges): void {
   this.rating= this.protuct.rating
    for(let i=0 ; i <this.protuct.rating; i++ ){
    if(i+1>this.protuct.rating){
      this.starRating.push(faStarHalf)
      return
    }
    this.starRating.push(faStar)
   } 
  }


}
