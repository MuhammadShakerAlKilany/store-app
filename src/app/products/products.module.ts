import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetalsComponent } from './product-detals/product-detals.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { PriceBeforeAndAfterPipe } from './pipes/price-before-and-after.pipe';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductCardComponent,
    ProductDetalsComponent,
    PriceBeforeAndAfterPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports:[
    ProductListComponent,
    ProductCardComponent,
    ProductDetalsComponent,
    
  ]
})
export class ProductsModule { }
