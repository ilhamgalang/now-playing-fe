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
  registerForm: FormGroup;

  // status disable dan loading button
  disableAndLoadingButtonSignIn = false;
  disableAndLoadingButtonTryIt = false;
  disableAndLoadingButtonSignUp = false;


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
    // register form
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      name: ['', Validators.required],
      password: ['', Validators.required]
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
        // body
        const body = {
          username: this.loginForm.value.username,
          password: this.loginForm.value.password
        };
        this.prosesApiLogin(body, this.loginForm.value.remember, 'login');
    } else {
      this.notif.error('Username or Password is Empty!');
      // enable button sign in
      this.disableAndLoadingButtonSignIn = false;
    }
  }

  // login sebagai guest
  tryAsGuest() {
    // disable button try it
    this.disableAndLoadingButtonTryIt = true;
    // api
    const body = {
      username: 'guest',
      password: ''
    };
    const remember = false;
    this.prosesApiLogin(body, remember, 'tryIt');
  }

  // proses register
  register() {
    // disable button sign up
    this.disableAndLoadingButtonSignUp = true;
    // validasi login
    if (this.registerForm.value.username !== '' &&
      this.registerForm.value.username !== null &&
      this.registerForm.value.name !== '' &&
      this.registerForm.value.name !== null &&
      this.registerForm.value.password !== '' &&
      this.registerForm.value.password !== null) {
        // api
        const api = 'user/register';
        // body
        const body = {
          username: this.registerForm.value.username,
          name: this.registerForm.value.name,
          password: this.registerForm.value.password
        }
        // get api
        this.apiServer.post(body, api).subscribe(response => {
          // jika berhasil register
          if (response.status === 'success') {
            this.notif.success(response.message);
            const remember = false;
            this.prosesApiLogin(body, remember, 'register');
            // enable button sign up
            this.disableAndLoadingButtonSignUp = false;
        } else {
            this.notif.error(response.message);
            // enable button sign up
            this.disableAndLoadingButtonSignUp = false;
          }
        }, error => {
          console.log(error);
          this.notif.error(error.message);
          // enable button sign up
          this.disableAndLoadingButtonSignUp = false;
        });
     } else {
      this.notif.error('Username, Name or Password is Empty!');
      // enable button sign up
      this.disableAndLoadingButtonSignUp = false;
     }

  }

  // api untuk login
  prosesApiLogin(body: Object, remember: boolean, state: any) {
    // api
    const apiLogin = 'user/authenticate';
    // get api
    this.apiServer.post(body, apiLogin).subscribe(response => {
      // jika berhasil login
      if (response.status === 'success') {
        this.auth.login(response, remember);    
        this.stateDisableAndLoading(state);
      } else {
        this.notif.error(response.message);
        this.stateDisableAndLoading(state);
      }
    // jika error
    }, error => {
      console.log(error); 
      this.stateDisableAndLoading(state);
      this.notif.error(error.message);
    });
  }

  // menghilangkan loading dan enable button
  stateDisableAndLoading(state: any) {
    if (state === 'login') {
      // enable button sign in
      this.disableAndLoadingButtonSignIn = false;          
    } else {
      // enable button try it
      this.disableAndLoadingButtonTryIt = false;                    
    }
  }

}
