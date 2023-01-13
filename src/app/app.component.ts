import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  user: any = null;
  constructor() {}
  ngOnInit(): void {
    let inSession = sessionStorage.getItem('kh_login');
   this.user = inSession ? JSON.parse(inSession) : null;
  }

  onLogout() {
    sessionStorage.clear();
    location.reload();
  }
}
