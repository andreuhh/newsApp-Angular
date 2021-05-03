import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ForecastService } from '../forecast.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  // uso $ perchè fa riferimento a un observable(convenzione) + scrivo l'interface inline
  forecast$: Observable<{ dateString: string; temp: number; }[]>;

  constructor(
    forecastService: ForecastService
  ) {
    this.forecast$ = forecastService.getForecast();
  }

  ngOnInit(): void {
  }

}
