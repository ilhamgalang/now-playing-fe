import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  private isLogin = new BehaviorSubject<Boolean>(false);
  tempIsLogin = this.isLogin.asObservable();

  constructor() { }

  // parsing data antara login dan navigasi
  changeIsLogin(statusLogin: Boolean) {
  	this.isLogin.next(statusLogin);
  }
}
