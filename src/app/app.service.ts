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

  login(data: any) {
    return this.http.post(`${api}/login`, data);
  }

  addFavorite(data: any) {
    return this.http.post(`${api}/add-favorite`, data);
  }

  removeFavorite(id: number) {
    return this.http.delete(`${api}/remove-favorite/${id}`);
  }

  upload(file: any) {
    const formData: FormData = new FormData();
    formData.append('my_file', file);
    return this.http.post(`${api}/upload`, formData);

    // const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
    //   reportProgress: true,
    //   responseType: 'json'
    // });
    // return this.http.request(req);
  }


  
  getUser(): any {
    let inSession = sessionStorage.getItem('kh_login');
    return inSession ? JSON.parse(inSession) : null;
  }

  updateProfile(data: any) {
    return this.http.put(`${api}/update-profile/${this.getUser().id}`, data);
  }

}
