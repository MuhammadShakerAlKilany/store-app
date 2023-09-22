import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Protuc } from 'src/app/interface/protuc';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  protuctsArry:Protuc[]=[]
  constructor(public httpClint:HttpClient){
    this.httpClint.get("/assets/products-list.json").subscribe((data)=>{
     
      this.protuctsArry = data as Protuc[]
    })
  }
}
