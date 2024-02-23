import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiURL } from '../utils/constants';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpCLient: HttpClient) {}

  getData(): Observable<any> {
    return this.httpCLient.get<any>(apiURL);
  }
}
