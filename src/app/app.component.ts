import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'now-playing-fe';
  constructor(
	   private router: Router
	  ) {
  }

  ngOnInit() {
    // cek apakah browser support web storage
    if (typeof(Storage) !== undefined) {
      console.log('Web Storage Work!');
      // cek apakah user sudah pernah login
      if (sessionStorage.getItem('idUser') !== null || localStorage.getItem('idUser') !== null) {
        this.router.navigate([localStorage.getItem('currentPath')]);
      } else {
        this.router.navigate(['login']);
      }
    } else {
      console.log('Web Storage Doesn\'t Work!');
    }
  }

}
