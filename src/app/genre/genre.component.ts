import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { NotificationService } from '../service/notification.service';
import { ServerService } from '../service/server.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {

  // alamat resource server
  resource: any;

  // data genre
  listGenre: Object;

  constructor(
    private notif: NotificationService,
    private server: ServerService,
    private apiServer: ApiService
  ) {
    // mendapatkan alamat resource server
    this.resource = this.server.getResource();
  }

  ngOnInit() {
    // get data genre
    this.getGenre();
  }

  // get data genre
  getGenre() {
  	const api = 'genre/read';
  	this.apiServer.get(api).subscribe(response => {
  	  this.listGenre = response.data;
  	}, error => {
      this.notif.error(error);
  	});
  }

  // get data genre dengan sort
  sortBy(sort: any) {
    const api = 'genre/read';
    const params = '?sort=genre:' + sort;
    this.apiServer.getParams(api, params).subscribe(response => {
      this.listGenre = response.data;
    }, error => {
      this.notif.error(error);
    });
  }

}
