import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  user: any = null;
  constructor(private app: AppService) {
    this.app.checkTokenTime().subscribe((res: any) => {

      if (res.status == false || res.thoi_gian >= 120) {
        alert('Phiên hết hạn');
        sessionStorage.clear();
      }
    })
  }
  ngOnInit(): void {
    let inSession = sessionStorage.getItem('kh_login');
   this.user = inSession ? JSON.parse(inSession) : null;
  }

  onLogout() {
    sessionStorage.clear();
    location.reload();
  }
}
