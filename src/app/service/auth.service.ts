import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userInfo: Object;

  constructor(
    private router: Router
  ) { }

  getUserInfo() {
    return this.userInfo;
  }

  init() {
    if (localStorage.getItem('idUser') !== null || sessionStorage.getItem('idUser')) {    
      this.userInfo = {
        name: localStorage.getItem('nameUser'),
        photo: localStorage.getItem('photoUser'),
        _id: sessionStorage.getItem('idUser') !== null ? sessionStorage.getItem('idUser') : localStorage.getItem('idUser')
      };
    } else {
      this.userInfo = {};
    }
  }

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
  }

  logout() {
    sessionStorage .clear();
    localStorage.clear();
    this.userInfo = {};
    this.router.navigate(['login']);
  }
}
