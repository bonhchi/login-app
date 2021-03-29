import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

type Product = {
  id: string;
  name: string;
  image: string;
  quantity: number;
  price: number;
};

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  addForm = new FormGroup({
    name: new FormControl(''),
    image: new FormControl(''),
    quantity: new FormControl(''),
    price: new FormControl(''),
  });
  public product: Product = {
    id: '',
    name: '',
    image: '',
    quantity: 0,
    price: 0,
  };
  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  addSummit() {
    // this.productService.productAddClick().subscribe();
  }
}
