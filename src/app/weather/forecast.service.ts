import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { from, Observable, of, throwError } from 'rxjs';
import { map, switchMap, pluck, mergeMap, filter, toArray, tap, catchError, retry } from 'rxjs/operators';
import { NotificationsService } from '../notifications/notifications.service';

interface OpenWeatherResponse {
  list: {
    dt_txt: string;
    main: {
      temp: number;
    }
  }[]
}

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  private url = 'https://api.openweathermap.org/data/2.5/forecast'

  constructor(
    private http: HttpClient,
    private notificationsService: NotificationsService
  ) { }

  getForecast() {
    return this.getCurrentLocation()
      .pipe(
        map(coords => {
          return new HttpParams()
            .set('lat', String(coords.latitude))//lat e long devono essere di tipo string per essere usate
            .set('lon', String(coords.longitude))
            .set('units', 'metric')
            .set('appid', '2086213bb85bca01ba9e522fb2ab0411')
        }),
        switchMap(params => this.http.get<OpenWeatherResponse>(this.url, { params })),
        pluck('list'),
        mergeMap(value => of(...value)),
        filter((value, index) => index % 8 === 0), // visualizza solo 8 dati
        map(value => { // uso solo i valori dateString e temp
          return {
            dateString: value.dt_txt,
            temp: value.main.temp
          };
        }),
        toArray()
      );
  }

  getCurrentLocation() {
    return new Observable<any>((observer) => {
      window.navigator.geolocation.getCurrentPosition(
        (position) => {
          observer.next(position.coords);
          observer.complete();
        },
        (err) => observer.error(err)
      )
    }).pipe(
      retry(1), // num of tyme to resubscribe
      tap(() => {
        this.notificationsService.addSuccess('Got your location')
      }),
      catchError(err => {
        // 1 - Handle the errror
        this.notificationsService.addError('Failed to het your location');

        // 2 - return a new observable
        return throwError(err);


      })
    );
  }
}
