import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {

  http: any = 'http://localhost:8080/static/';
  listGenre: Object;

  constructor(
    private apiServer: ApiService
  ) { }

  ngOnInit() {
  	const api = 'genre/read';
  	this.apiServer.get(api).subscribe(response => {
  	  console.log(response);
  	  this.listGenre = response.data;
  	}, error => {
  		console.log(error);
  	});
  }

}
