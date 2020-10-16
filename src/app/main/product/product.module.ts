import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeComponent } from './type/type.component';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';



@NgModule({
  declarations: [TypeComponent, OrderComponent, ProductComponent],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
