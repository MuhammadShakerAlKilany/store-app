import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { faStar, faStarHalf } from '@fortawesome/free-regular-svg-icons';
import { Protuc } from 'src/app/interface/protuc';

@Component({
  selector: 'app-product-detals',
  templateUrl: './product-detals.component.html',
  styleUrls: ['./product-detals.component.scss']
})
export class ProductDetalsComponent  {
  protuct!:Protuc
  starRating:any[]=[]
  rating=0
  protuctsArry:Protuc[]=[]
  id!:number
imagSors!:string
  constructor(public httpClint:HttpClient,public route:ActivatedRoute){
    this.httpClint.get("/assets/products-list.json").subscribe((data)=>{
      this.id= Number(this.route.snapshot.paramMap.get('id')) !
      this.protuctsArry = data as Protuc[]
      this.protuct = this.protuctsArry.find((product:Protuc)=>{
        
        return  product.id === this.id
      })! 
      this.rating= this.protuct?.rating!
      this.imagSors = this.protuct?.thumbnail
     for(let i=0 ; i <this.protuct?.rating!; i++ ){
     if(i+1>this.protuct?.rating!){
       this.starRating.push(faStarHalf)
       break
     }
     this.starRating.push(faStar)
    }

    })
  }
  changImg(src:string){
 this.imagSors = src
  }
}
