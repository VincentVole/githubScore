import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class HttpServiceService {

  constructor(private _http:Http) { }

  getUser(userName){
  	return this._http.get('https://api.github.com/users/' + userName).map(Response => Response.json()).toPromise();
  }

}
