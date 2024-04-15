import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _http = inject(HttpClient);
  private urlbase = "https://api.openweathermap.org/data/2.5/weather?";
  private apiKey = "appid=a8a23799ed7efee726481463b7d4f217&lang=es";

  getWeather(cityName: String):Observable<Weather>{
    return this._http.get<Weather>(`${this.urlbase}q=${cityName}&${this.apiKey}`);
  }
}
