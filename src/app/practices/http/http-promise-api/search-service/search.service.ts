import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private apiURL: string = 'https://itunes.apple.com/search';

  constructor(private httpClient: HttpClient) { }

  search(term: string): Promise<any>{

    const promise = new Promise((resolve, reject) => {
      const apiURL = `${this.apiURL}?term=${term}&media=music&limit=20`
      this.httpClient.delete(apiURL).toPromise().then(res => { console.log(res) }, msg => console.log("Un error ha ocurrido"));
      resolve();
    })

    return promise;

  }
}
