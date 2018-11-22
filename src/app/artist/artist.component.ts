import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  p: number = 1;

  listArtist = [
  	{
  		artis: 'Paramore 1',
  		img: 'http://localhost:8080/static/img/artist/default.png'
  	},
  	{
  		artis: 'Paramore 2',
  		img: 'http://localhost:8080/static/img/artist/default.png'
  	},
  	{
  		artis: 'Paramore 3',
  		img: 'http://localhost:8080/static/img/artist/default.png'
  	},
  	{
  		artis: 'Paramore 4',
  		img: 'http://localhost:8080/static/img/artist/default.png'
  	},
  	{
  		artis: 'Paramore 5',
  		img: 'http://localhost:8080/static/img/artist/default.png'
  	},
  	{
  		artis: 'Paramore 6',
  		img: 'http://localhost:8080/static/img/artist/default.png'
  	},
  	{
  		artis: 'Paramore 7',
  		img: 'http://localhost:8080/static/img/artist/default.png'
  	},
  	{
  		artis: 'Paramore 8',
  		img: 'http://localhost:8080/static/img/artist/default.png'
  	},
  	{
  		artis: 'Paramore 9',
  		img: 'http://localhost:8080/static/img/artist/default.png'
  	},
  	{
  		artis: 'Paramore 10',
  		img: 'http://localhost:8080/static/img/artist/default.png'
  	},
  	{
  		artis: 'Paramore 11',
  		img: 'http://localhost:8080/static/img/artist/default.png'
  	},
  	{
  		artis: 'Paramore 12',
  		img: 'http://localhost:8080/static/img/artist/default.png'
  	},
  	{
  		artis: 'Paramore 13',
  		img: 'http://localhost:8080/static/img/artist/default.png'
  	},
  	{
  		artis: 'Paramore 14',
  		img: 'http://localhost:8080/static/img/artist/default.png'
  	},
  	{
  		artis: 'Paramore 15',
  		img: 'http://localhost:8080/static/img/artist/default.png'
  	},
  	{
  		artis: 'Paramore 16',
  		img: 'http://localhost:8080/static/img/artist/default.png'
  	},
  	{
  		artis: 'Paramore 17',
  		img: 'http://localhost:8080/static/img/artist/default.png'
  	},
  	{
  		artis: 'Paramore 18',
  		img: 'http://localhost:8080/static/img/artist/default.png'
  	},
  	{
  		artis: 'Paramore 19',
  		img: 'http://localhost:8080/static/img/artist/default.png'
  	},
  	{
  		artis: 'Paramore 20',
  		img: 'http://localhost:8080/static/img/artist/default.png'
  	}
  ];

  filterAlphabet: any;

  constructor() { }

  ngOnInit() {
  }

  setFilterAlphabet(filter: any) {
  	this.filterAlphabet = filter;
  	console.log(this.filterAlphabet);
  }

}
