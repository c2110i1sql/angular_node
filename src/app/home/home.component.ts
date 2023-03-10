import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any;
  proDetail: any;
  user: any = null;
  constructor(private app: AppService) { }
  ngOnInit(): void {
    let inSession = sessionStorage.getItem('kh_login');
    this.user = inSession ? JSON.parse(inSession) : null;

    this.app.getProduct().subscribe((res: any) => {
      this.products = res.result;
      console.log(this.products);
    });
  }

  showDetail(pro: any) {
    this.proDetail = pro;
  }

  onFavorite(uId: number, pId: number) {
    this.app.addFavorite({product_id: pId, user_id: uId}).subscribe((res:any) => {
      location.reload();
    });
  }

  boFavorite(id: number) {
    this.app.removeFavorite(id).subscribe((res:any) => {
     location.reload();
    });
  }
}
