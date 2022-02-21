import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

interface ApiResponseInterface {
  market_data?: {
    current_price: {
      chf: string;
      usd: string;
      toto:string;
    }
  };
  ath: {
    usd: string;
  }
  
}

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor(
    private _http: HttpClient
  ) { }

  async getCrypto(): Promise<ApiResponseInterface> {
    // Get bitcoin price from coingecko
    const url = 'https://api.coingecko.com/api/v3/coins/bitcoin'
    const req =  this._http.get<ApiResponseInterface>(url);
    const data = await firstValueFrom(req);
    if (!data?.market_data?.current_price?.chf) {
      throw new Error('No data')
    }
    return data;
  }
}
