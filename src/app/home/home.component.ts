import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    // set currentPath
    localStorage.setItem('currentPath', 'home');
  }

  logout() {
    sessionStorage .clear();
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
