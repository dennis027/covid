import { Injectable } from '@angular/core';

const LOCATION = 'location';
const COORDINATES = 'coordinates';


@Injectable({
  providedIn: 'root'
})

export class LocationStorageService {


  constructor() { }
  public setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }
    
  public getItem(key: string){ 
    return localStorage.getItem(key)
  }
  public removeItem(key:string) {
    localStorage.removeItem(key);
  }
  public clear(){
    localStorage.clear(); 
  }
  
}
