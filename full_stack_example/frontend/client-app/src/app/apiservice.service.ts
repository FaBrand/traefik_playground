import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  private dataUrl = environment.apiUrl + "/data"; // URL to web api

  getData(): Observable<number[]> {
    console.log(this.dataUrl);
    return this.http.get<number[]>(this.dataUrl).pipe(
      tap(cars => console.log(cars)),
      catchError(this.handleError("getData", []))
    );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }

  constructor(
    private http: HttpClient,
  ) {}
}