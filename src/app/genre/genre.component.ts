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

  loadingGetGenre: boolean = false;

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
    this.loadingGetGenre = true;
  	const api = 'api/genre/read';
  	this.apiServer.get(api).subscribe(response => {
  	  this.listGenre = response.data;
      this.loadingGetGenre = false;
  	}, error => {
      this.notif.error(error.message);
      this.loadingGetGenre = false;
 	  });
  }

  // get data genre dengan sort
  sortBy(sort: any) {
    this.loadingGetGenre = true;
    const api = 'api/genre/read';
    const params = 'sortKey=genre&sortValue=' + sort;
    this.apiServer.getParams(api, params).subscribe(response => {
      this.listGenre = response.data;
      this.loadingGetGenre = false;
    }, error => {
      this.notif.error(error.message);
      this.loadingGetGenre = false;
    });
  }

}
