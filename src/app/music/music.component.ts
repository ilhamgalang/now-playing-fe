import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {

  stateMenu: any;

  constructor() { }

  ngOnInit() {
    // set currentPath
    localStorage.setItem('currentPath', 'music');
    this.stateMenu = 'home';
  }

  // status menu
  setStateMenu(state: any) {
  	this.stateMenu = state;
  }

}
