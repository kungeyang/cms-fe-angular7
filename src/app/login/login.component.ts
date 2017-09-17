import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',

  styles: [ `
    app-login{display:block}
    .login-form {
      max-width: 300px;
      margin: 0 auto;
    }

    .login-form-forgot {
      float: right;
    }

    .login-form-button {
      width: 100%;
    }
  `
  ]
})
export class LoginComponent implements OnInit {
  _window: any;
  @ViewChild('canvas') private canvas: ElementRef;
  @ViewChild('form') private form: NgForm;
  loginData = {
    username: '',
    password: ''
  }

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    // 
  }

  login() {
    for (const i in this.form.controls) {
      this.form.controls[ i ].markAsDirty();
    }
    if(this.form.valid){
      this.http.post('/api/login',this.loginData).subscribe((res:any)=>{
        // 
      }, (err: any)=>{
        // 
      });
    }
  }

  start(){
    // 
  }

  
}

