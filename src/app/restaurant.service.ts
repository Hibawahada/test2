import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  
  private baseUrl = 'http://localhost:8080/restaurants/get';

  constructor(private http: HttpClient) { }

  getRestaurantsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
