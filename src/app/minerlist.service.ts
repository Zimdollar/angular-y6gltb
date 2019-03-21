import { Injectable } from '@angular/core';

import { HttpClient,HttpErrorResponse  } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { throwError as observableThrowError } from 'rxjs';
import {Miners} from './miner.model'
@Injectable({
  providedIn: 'root'
})
export class MinerlistService {
 
private _url:string = "https://slushpool.com/accounts/profile/json/1887917-fc7a62643405e56dbaa23a64d029af5a";
  constructor(private http: HttpClient) { }

  getminers():Observable<Miners[]>{
    return this.http.get<Miners[]>(this._url)
    .pipe(map(data => data), catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }
}
