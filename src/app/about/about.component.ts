import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // set currentPath
    localStorage.setItem('currentPath', 'about');
  }

  tes() {
  	document.body.scrollTop = 0;
  	document.documentElement.scrollTop = 0;
  }

}
