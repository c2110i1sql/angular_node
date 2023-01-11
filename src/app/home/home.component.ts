import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any;
  constructor(private app: AppService) { }

  ngOnInit(): void {
    this.app.getProduct().subscribe((res: any) => {
      this.products = res.result;
    });
  }

}
