import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { ProductsModule } from '../products/products.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [NotFoundComponent,
     HeaderComponent,
      RegisterComponent],
  imports: [
    CommonModule,
    RouterModule,ProductsModule,
    FontAwesomeModule
  ]
  ,
  exports: [
    NotFoundComponent, HeaderComponent, RegisterComponent
  ]
})
export class SharedModule { }
