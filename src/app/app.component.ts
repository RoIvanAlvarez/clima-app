import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api.service';
import { Weather } from './models/weather.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  weather?: Weather;
  cityName: String = '';
  buttonPressed: boolean = false;
  tempC: number = 0;
  tempCMax: number = 0;
  tempCMin: number = 0;
  private _weatherService = inject(ApiService);

  getWeather(){
    this.buttonPressed = true;
    this._weatherService.getWeather(this.cityName).subscribe((result: Weather) => {
      console.log(result)
      this.weather = result;
      this.tempC = result.main.temp - 273.15;
      this.tempCMax = result.main.temp_max - 273.15;
      this.tempCMin = result.main.temp_min - 273.15;
    });
  }
}
