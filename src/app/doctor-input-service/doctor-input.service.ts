import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Results } from '../results-class/results';
import {environment } from '../../environments/environment';
import { DoctorInput } from '../doctor-input-class/doctor-input';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DoctorInputService {

  private api = "https://djangoangulartest.herokuapp.com/doctorsinpunt/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })

   }

constructor(private httpClient: HttpClient) { }

getData(): Observable<any[]> {
  return this.httpClient.get<any[]>(this.api);
}

}
