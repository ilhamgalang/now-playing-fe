import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { NavService } from '../service/nav.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  resource: any = 'http://localhost:8080/static/';

  userInfo: Object;
  photoUser: any;

  isLogin: Boolean;

  constructor(
    private auth: AuthService,
    private nav: NavService
  ) {
    // parsing data dengan login
    this.nav.tempIsLogin.subscribe((response) => {
      this.userInfo = this.auth.getUserInfo();
      this.isLogin = response;
      if (this.userInfo !== undefined) {
        this.photoUser = this.resource + this.userInfo['photo'];
      }
    });
  }

  // ketika web baru di buka
  ngOnInit() {
    // cek dan get data user dari localStorage 
    this.auth.init();
    this.userInfo = this.auth.getUserInfo();
    this.photoUser = this.resource + this.userInfo['photo'];
  }

  logout() {
    this.auth.logout();
  }

}
