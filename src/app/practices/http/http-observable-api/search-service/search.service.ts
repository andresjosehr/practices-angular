import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Song } from '../../http-promise-api/song-interface/song';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private apiURL: string = 'https://itunes.apple.com/search';
  public  songs: Song[];

  constructor(
    private httpClient: HttpClient
  ) { }

  search(term: string): Observable<Song[]>{

    const apiURL = `${this.apiURL}?term=${term}&media=music&limit=20`;

    return this.httpClient.get(apiURL).pipe(map((res) =>{
      return res["results"].map(item =>{
        return new SearchItem(
          item.artworkUrl100,
          item.artistName,
          item.trackName
        )
      })
    }))

  }
}


class SearchItem {
  constructor(
              public artworkUrl100: string,
              public artistName: string,
              public trackName: string) {
  }
}

