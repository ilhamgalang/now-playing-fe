import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class ApiService {

 constructor(private http: HttpClient) {
  
  }

  private server = 'http://localhost:96/';

  // get
  get(api: any): Observable<any> {
    let result: Observable<Object>;
    result = this.http.get(this.server + api);
    return result;
  }

  getParams(api: any, params: Object): Observable<any> {
    let result: Observable<Object>;
    result = this.http.get(this.server + api);
    return result;
  }

  // post
  post(data: Object, api: any): Observable<any> {
    let result: Observable<Object>;
    result = this.http.post(this.server + api, data, httpOptions);
    return result;
  }

}
