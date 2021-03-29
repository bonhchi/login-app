import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

type Product = {
  id: string;
  name: string;
  image: string;
  quantity: number;
  price: number;
};

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  public id: string = '';
  public products: Product[] = [];
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.id = params['id'];
    });
    this.productService.getProducts().subscribe((response) => {
      this.products = response;
    });
  }
  deleteUser(id: any) {
    this.productService.productDeleteClick(id).subscribe(() => {
      this.products = this.products.filter((item) => item.id != id);
    });
  }
}
