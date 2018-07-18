import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

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
   

  constructor(
    public http: Http,
    
  )
   {this.basepath = "http://10.0.4.98:3000/back"
  }

  getLatesMovies(user){
    return this.http.post(this.basepath + "/validar", user, this.headers);
  }
}
