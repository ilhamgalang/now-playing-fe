import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  resource: any;

  constructor() {
    // alamat resource be
    this.resource = 'http://localhost:8080/static/';
  }

  getResource() {
    return this.resource;
  }
}
