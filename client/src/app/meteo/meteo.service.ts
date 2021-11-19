import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
   'Content-Type':  'application/json',
   Authorization: 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor(private http: HttpClient) { }
  getLocation(name:string){
   
		return this.http.get("http://localhost:8080/getMeteoDetails/"+name);
	}
  
}
