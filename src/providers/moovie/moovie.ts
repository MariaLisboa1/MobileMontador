import { Injectable } from '@angular/core';
import { Http, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/map';
import { UrlApi } from "../../config/api"

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {

  basepath: string;
  private headers: {};
  private Headers: Headers;

  public user: any = "05";
  options: RequestOptions;
  constructor(public http: Http) {
  

    this.Headers = new Headers()
    this.Headers.append('Access-Control-Allow-Origin', '*');
    this.Headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    this.Headers.append('Accept', 'application/json');
    this.Headers.append('content-type', 'application/json');
    this.headers = { headers: this.Headers }
    this.options = new RequestOptions(this.headers);
  }

  getLatesMovies(user) {
    return this.http.post(`${UrlApi.baseUrl}/validar/`, this.user, this.headers);
  }
}