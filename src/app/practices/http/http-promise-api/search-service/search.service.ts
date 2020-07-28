import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Song } from '../song-interface/song';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private apiURL: string = 'https://itunes.apple.com/search';
  public  songs: Song[];

  constructor(
    private httpClient: HttpClient,
    ) { }

  search(term: string): Promise<any>{

    const apiURL = `${this.apiURL}?term=${term}&media=music&limit=20`
      return  this.httpClient.get(apiURL).toPromise().then(res => {
        // this.songs = 
        this.songs= res["results"].map(item=>{
          return new SearchItem(
            item.artworkUrl100,
            item.artistName,
            item.trackName
        );
        })
      }).catch(err => console.log("Error en la peticion"));   

  }
}


class SearchItem {
  constructor(
              public artworkUrl100: string,
              public artistName: string,
              public trackName: string) {
  }
}

