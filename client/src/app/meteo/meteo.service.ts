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
		return this.http.get("http://localhost:8080/getlieu/"+name).pipe(
      catchError((err) => {
        console.log('error caught in getLocation service')
        console.error(err);

        //Handle the error here

        return throwError(err);    //Rethrow it back to component
      })
    )
	}
  getMeteo(name:string){
   
		return this.http.get("http://localhost:8080/getMeteoCourante/"+name).pipe(
      catchError((err) => {
        console.log('error caught in getMeteo service')
        console.error(err);

        //Handle the error here

        return throwError(err);    //Rethrow it back to component
      })
    )
	}
  getPrevisions(name:string){
   
		return this.http.get("http://localhost:8080/getPrevisions/"+name).pipe(
      catchError((err) => {
        console.log('error caught in getPrevisions service')
        console.error(err);

        //Handle the error here

        return throwError(err);    //Rethrow it back to component
      })
    )
	}
  
}
