import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { CreatecustomerComponent } from './components/createcustomer/createcustomer.component';

const routes: Routes = [
  {
    path:'add',
    component:ProductAddComponent
  },
  {
    path:'addCustomer',
    component:CreatecustomerComponent
  },
  {
    path:'getAllCustomer',
    component:CreatecustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
