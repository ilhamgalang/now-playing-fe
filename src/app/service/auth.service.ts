import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // data USer
  userInfo: Object;

  // status cek login
  private isLogin = new BehaviorSubject<Boolean>(false);
  tempIsLogin = this.isLogin.asObservable();

  constructor(
    private router: Router
  ) { }

  // return data user
  getUserInfo() {
    return this.userInfo;
  }

  // ketika web pertama dibuka, untuk get data user
  init() {
    if (localStorage.getItem('idUser') !== null || sessionStorage.getItem('idUser')) {    
      this.userInfo = {
        name: localStorage.getItem('nameUser'),
        photo: localStorage.getItem('photoUser'),
        _id: sessionStorage.getItem('idUser') !== null ? sessionStorage.getItem('idUser') : localStorage.getItem('idUser')
      };
      this.changeIsLogin(true);
    } else {
      this.userInfo = {};
    }
  }

  // proses login
  login(response: Object, remember: boolean) { 
    // apakah opsi remember me di ceklis
    if (remember == true) {
      // jika ya, gunakan localStorage
      sessionStorage.clear();
      localStorage.setItem('idUser', response['data']._id);
      localStorage.setItem('nameUser', response['data'].name);
      localStorage.setItem('photoUser', response['data'].photo);
      localStorage.setItem('token', response['token']);
    } else {
      // jika tidak, gunakan sessionStorage
      localStorage.clear();
      sessionStorage.setItem('idUser', response['data']._id);
      localStorage.setItem('nameUser', response['data'].name);
      localStorage.setItem('photoUser', response['data'].photo);
      localStorage.setItem('token', response['token']);
    }
    this.userInfo = response['data'];
    this.changeIsLogin(true);
    this.router.navigate(['home']);
  }

  // proses logout
  logout() {
    sessionStorage .clear();
    localStorage.clear();
    this.userInfo = {};
    this.changeIsLogin(false);
    this.router.navigate(['login']);
  }

  // parsing data antara login dan navigasi
  changeIsLogin(statusLogin: Boolean) {
  	this.isLogin.next(statusLogin);
  }
}
