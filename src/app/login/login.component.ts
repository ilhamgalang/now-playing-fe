import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    // set currentPath
    localStorage.setItem('currentPath', 'login');

    // login form
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  cekLogin() {
    if (this.loginForm.value.username !== '' &&
      this.loginForm.value.username !== null &&
      this.loginForm.value.password !== '' &&
      this.loginForm.value.password !== null) {
      console.log(this.loginForm.value.username);
      console.log(this.loginForm.value.password);
    } else {
      console.log('Username atau Password Kosong');
    }
  }
}
