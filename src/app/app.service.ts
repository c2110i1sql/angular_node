import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const api  = 'http://localhost:3000/api';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }


  getProduct() {
    return this.http.get(`${api}/product`);
  }

  getProductById(id: number) {
    return this.http.get(`${api}/product/${id}`);
  }
}
