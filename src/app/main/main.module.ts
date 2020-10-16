import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { TypeComponent } from './type/type.component';



@NgModule({
  declarations: [DashboardComponent, ProductComponent, TypeComponent],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
