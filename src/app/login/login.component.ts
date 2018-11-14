import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '../service/notification.service';
import { ApiService } from '../service/api.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // Form
  loginForm: FormGroup;

  // status disable dan loading button
  disableAndLoadingButtonSignIn = false;
  disableAndLoadingButtonTryIt = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private notif: NotificationService,
    private apiServer: ApiService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    // set currentPath
    localStorage.setItem('currentPath', 'login');

    // login form
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      remember: [false]
    });

  }

  // proses login
  cekLogin() {
    // disable button sign in
    this.disableAndLoadingButtonSignIn = true;
    // validasi login
    if (this.loginForm.value.username !== '' &&
      this.loginForm.value.username !== null &&
      this.loginForm.value.password !== '' &&
      this.loginForm.value.password !== null) {
        // api
        const api = 'user/authenticate';
        // body
        const body = {
          username: this.loginForm.value.username,
          password: this.loginForm.value.password
        };
        // get api
        this.apiServer.post(body, api).subscribe(response => {
          // jika berhasil login
          if (response.status === 'success') {
            this.auth.login(response, this.loginForm.value.remember);
            this.notif.success(response.message);
            this.router.navigate(['home']);
          } else { // jika gagal login
            this.notif.error(response.message);
            this.loginForm.reset();
            // enable button sign in
            this.disableAndLoadingButtonSignIn = false;
          }
          // jika error
        }, error => {
          console.log(error);
          this.notif.error(error.message);
          // enable button sign in
          this.disableAndLoadingButtonSignIn = false;
        });
    } else {
      this.notif.error('Username atau Password Kosong');
      // enable button sign in
      this.disableAndLoadingButtonSignIn = false;
    }
    console.log(this.loginForm.value.remember);
  }

  // login sebagai guest
  tryAsGuest() {
    // disable button try it
    this.disableAndLoadingButtonTryIt = true;
    const api = 'user/authenticate';
    const dataLogin = {
      username: 'guest',
      password: ''
    };
    this.apiServer.post(dataLogin, api).subscribe(response => {
      if (response.status === 'success') {
        this.auth.login(response, false);
        this.notif.success(response.message);
        this.router.navigate(['home']);
      } else {
        this.notif.error(response.message);
        this.loginForm.reset();
        // enable button try it
        this.disableAndLoadingButtonTryIt = false;
      }
    }, error => {
      console.log(error);
      this.notif.error(error.message);
      // enable button try it
      this.disableAndLoadingButtonTryIt = false;
    });
  }

}
