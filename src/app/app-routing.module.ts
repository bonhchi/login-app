import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AddComponent } from './pages/product/add/add.component';
import { DeleteComponent } from './pages/product/delete/delete.component';
import { DetailComponent } from './pages/product/detail/detail.component';
import { EditComponent } from './pages/product/edit/edit.component';
import { ProductComponent } from './pages/product/product.component';

const routes: Routes = [
  {path : 'login', component: LoginComponent},
  {path : 'product', component: ProductComponent},
  {path : 'product/add', component:AddComponent},
  {path : 'product/edit/:id', component:EditComponent},
  {path : 'product/delete/:id' ,component: DeleteComponent},
  {path : 'product/detail/:id', component: DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }