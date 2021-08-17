import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = "https://djangoangulartest.herokuapp.com/doctorsinpunt/";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DoctorInputService {

  constructor(private http: HttpClient) { }
  patient(name: string, status: string, recomendations: string, remarks: string): Observable<any> {
    return this.http.post(AUTH_API , {
      name,
      status,
      recomendations,
      remarks,
    }, httpOptions);
  }
}
