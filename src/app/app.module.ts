import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { PaginationComponent } from './pages/pagination/pagination.component';
import { ProductComponent } from './pages/product/product.component';
import { AddComponent } from './pages/product/add/add.component';
import { EditComponent } from './pages/product/edit/edit.component';
import { DeleteComponent } from './pages/product/delete/delete.component';
import { DetailComponent } from './pages/product/detail/detail.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PaginationComponent,
    ProductComponent,
    AddComponent,
    EditComponent,
    DeleteComponent,
    DetailComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
