import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from '../service/nav.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // data USer
  userInfo: Object;

  constructor(
    private router: Router,
    private nav: NavService
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
      this.nav.changeIsLogin(true);
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
    this.nav.changeIsLogin(true);
    this.router.navigate(['home']);
  }

  // proses logout
  logout() {
    sessionStorage .clear();
    localStorage.clear();
    this.userInfo = {};
    this.nav.changeIsLogin(false);
    this.router.navigate(['login']);
  }
}
