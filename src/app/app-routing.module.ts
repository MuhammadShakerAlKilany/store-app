import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetalsComponent } from './products/product-detals/product-detals.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { RegisterComponent } from './shared/register/register.component';

const routes: Routes = [{path:"", pathMatch:"full",component:ProductListComponent },{path:"detals/:id",component:ProductDetalsComponent},{path:"register",component:RegisterComponent,pathMatch:"full"},{path:"**",component:NotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
