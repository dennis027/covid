import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Results } from '../results-class/results';
import { BehaviorSubject, Observable } from 'rxjs';
import { stringify } from '@angular/compiler/src/util';


@Injectable({
  providedIn: 'root'
})
export class ResultsRequestService {
  private api = "https://djangoangulartest.herokuapp.com/patientinpunt/";
  
  onDoctorSelect: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })

  }
  constructor(private httpClient: HttpClient) { }

  getData(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.api);
  }

  public async getPatientsById(id: string): Promise<Results[]> {
    const apiUrl: string = `${this.api}+${id}`;

    return this.httpClient.get<Results[]>(apiUrl).toPromise();
  }
}


