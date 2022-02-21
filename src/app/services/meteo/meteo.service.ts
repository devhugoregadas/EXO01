import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor(
    private _http: HttpClient
  ) { }

  async getMeteo(city: string): Promise<any> {
    //Get meteo from openwathermap
    const url = `https://community-open-weather-map.p.rapidapi.com/weather?q=${city}%2Cch&&id=2172797&lang=null&units=metric&mode=json`

  const options = {
    headers: new HttpHeaders ({
      "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
      "x-rapidapi-key": ""
    })
  };
  const req = this._http.get(url);
  const data = await firstValueFrom(req);
  console.log(data);
  


  }
}
