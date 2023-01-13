import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  constructor(private app: AppService) { }

  ngOnInit(): void {
  }

  onLogin() {
    // console.log(this.formLogin.value);
    let formData = this.formLogin.value;
    this.app.login(formData).subscribe((res: any) => {
      if (res.status == true) {
        sessionStorage.setItem('kh_login', JSON.stringify(res.result));
        location.assign('/');
      } else {
        alert(res.message);
      }
    })
  }

}
