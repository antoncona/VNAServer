import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_KEY = '40874ccc0c32493cb4d139aea8069fae';

  Today = '2019-12-07';

  constructor(private httpClient: HttpClient) { }

  public getNews() {
    // tslint:disable-next-line:max-line-length
    return this.httpClient.get<any>('https://newsapi.org/v2/top-headlines?country=ve&from=' + this.Today + '&pageSize=40&apiKey=' + this.API_KEY);
  }

  public getNews2() {
    // tslint:disable-next-line:max-line-length
    return this.httpClient.get<any>('https://newsapi.org/v2/everything?q=(venezuela OR venezolanos OR caracas)&from=' + this.Today + '&language=es&pageSize=40&sortBy=publishedAt&apiKey=' + this.API_KEY);
  }

}

// Cree un repositorio para este projecto
