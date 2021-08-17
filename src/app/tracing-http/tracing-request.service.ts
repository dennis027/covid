import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tracing } from '../tracing-class/tracing';
import { catchError } from 'rxjs/operators';
import { Data } from '@angular/router';

const contactapi = "https://djangoangulartest.herokuapp.com/contact/";


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TracingRequestService {
  tracing(name: any, contact: any, date: any) {
    throw new Error('Method not implemented.');
  }

  private api = "https://djangoangulartest.herokuapp.com/contact/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  getData(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.api);
  }

  addData(user: string, name: string, contact: number, date: Date): Observable<any> {
    return this.httpClient.post(contactapi, {
      user,
      name,
      contact,
      date,
    }, httpOptions);
  }
  deletePatient(id: number): Observable<any[]> {
    return this.httpClient.delete<any[]>(this.api + id);
  }
  updatePatient(postData: Tracing, id) {
    return this.httpClient.put(this.api + id, postData);
  }
  updateTracing(user:string,name:string,contact:number,date:Date): Observable<any>{
    const body = {user,name,contact,date};
    
    
     console.log(this.updateTracing)
    return this.httpClient.put(this.api + 1 + '/' ,body)
    
  }

  deleteTracing(id:number): Observable<void> {
    return this.httpClient.delete<void>(`${this.api}${id}`);
  }

}