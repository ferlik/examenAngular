import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError, retry} from 'rxjs/internal/operators';
import { Ordinateur } from '../models/ordinateur';

@Injectable({
  providedIn: 'root'
})
export class OrdinateurService {
  marqueDispo = ["Dell","HP","Apple","Asus"];
  typeDispo = ["Portable","Fixe","Tablette hybride"];
  categoDispo = ["Gaming","Bureautique","Premier prix"];


  apiURL = 'http://localhost:3000/computers';
  httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json'
  })
};

  constructor(private http: HttpClient) { }


  handleError(error) {
    let errorMessage ='';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = 'Error Code: ${error.status}\nMessage: ${error.message}';
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  };

  getOrdi(): Observable<Ordinateur[]> {

    return this.http.get<Ordinateur[]>(this.apiURL)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getOneOrdi(id: number): Observable<Ordinateur> {
    return this.http.get<Ordinateur>(this.apiURL + '/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  ajoutOrdi(ordi: Ordinateur): Observable<Ordinateur> {
    return this.http.post<Ordinateur>(this.apiURL, ordi, this.httpOptions).pipe(retry(1),
      catchError(this.handleError)
    );
  }

  modifOrdi(ordi: Ordinateur) {
    return this.http.put<Ordinateur>(this.apiURL + '/' + ordi.id ,ordi, this.httpOptions).pipe(retry(1),
    catchError(this.handleError)
    );
    }

  suprimOrdi(id:number) : Observable<Ordinateur> {
      return this.http.delete<Ordinateur>(this.apiURL + '/' + id).pipe(retry(1),
      catchError(this.handleError));
    }
}
