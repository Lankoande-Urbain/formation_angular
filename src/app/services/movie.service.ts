import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment.development';

// declaration des carialbes constante
const apiurl = environment.apiurl;
const apiKey = environment.apiKey;
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private http = inject(HttpClient);
  constructor() {}

  getMovie() {
    return this.http.get(`${apiurl}?api_key=${apiKey}`);
  }
}
