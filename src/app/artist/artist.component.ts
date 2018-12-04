import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { NotificationService } from '../service/notification.service';
import { ServerService } from '../service/server.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  p: number = 1;
  loadingGetArtis: boolean = false;

  listArtist: Object;

  // alamat resource server
  resource: any;
  filterAlphabet: any = 'all';

  constructor(
    private notif: NotificationService,
    private server: ServerService,
    private apiServer: ApiService
   ) {
    // mendapatkan alamat resource server
    this.resource = this.server.getResource();
  }

  ngOnInit() {
    this.getArtis();
  }

  // get data artis
  getArtis() {
    this.loadingGetArtis = true;
    const api = 'api/artis/read';
    this.apiServer.get(api).subscribe(response => {
      this.listArtist = response.data;
      this.loadingGetArtis = false;
    }, error => {
      this.notif.error(error.message);
      this.loadingGetArtis = false;
     });
  }

  setFilterAlphabet(filter: any) {
  	this.filterAlphabet = filter;
    this.loadingGetArtis = true;
    const api = 'api/artis/read';
    const params = 'filter=' + filter;
    this.apiServer.getParams(api, params).subscribe(response => {
      this.listArtist = response.data;
      this.loadingGetArtis = false;
    }, error => {
      this.notif.error(error.message);
      this.loadingGetArtis = false;
     });
  }


  // get data genre dengan sort
  sortBy(sort: any) {
    this.loadingGetArtis = true;
    const api = 'api/artis/read';
    const params = 'sortKey=artis&sortValue=' + sort;
    this.apiServer.getParams(api, params).subscribe(response => {
      this.listArtist = response.data;
      this.loadingGetArtis = false;
    }, error => {
      this.notif.error(error.message);
      this.loadingGetArtis = false;
    });
  }

}
