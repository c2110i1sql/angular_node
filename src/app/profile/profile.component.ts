import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentFile?: File;
  user: any;
  formProfile: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    avatar: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private app: AppService) {
    this.user = this.app.getUser();
  }

  ngOnInit(): void {
    this.formProfile.patchValue(this.user)
  }

  selectedFile(ev: any) {
    this.currentFile = ev.target.files[0];
    
  }

  onUpdate() {
    let data = this.formProfile.value;
    this.app.upload(this.currentFile).subscribe((res: any) => {
      let file_name: any = res.result;
      data.avatar = file_name;
      this.app.updateProfile(data).subscribe((res) => {
        console.log(res);
      })
    })
  }
}
