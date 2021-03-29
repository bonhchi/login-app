import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<any[]>(`${environment.host}/product`);
  }
  productEditClick(id: any) {
    return this.http
      .post(`${environment.host}/product/edit/${id}`, id)
      .toPromise();
  }
  productDeleteClick(id: any) {
    return this.http.delete(`${environment.host}/product/delete/${id}`);
  }
  productDetailClick(id: any) {
    return this.http
      .post(`${environment.host}/product/detail/${id}`, id)
      .toPromise();
  }
  productAddClick(product: any) {
    return this.http.post(`${environment.host}/product/add`, product);
  }
}
