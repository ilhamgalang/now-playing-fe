import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  resource: any = 'http://localhost:8080/static/';

  userInfo: Object;
  photoUser: any;

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.auth.init();
    this.userInfo = this.auth.getUserInfo();
    this.photoUser = this.resource + this.userInfo['photo'];
  }

  logout() {
    this.auth.logout();
  }

}
