import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Song } from '../../http-promise-api/song-interface/song';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private apiURL: string = 'https://itunes.apple.com/search';
  public  songs: Song[];

  constructor(
    private httpClient: HttpClient
  ) { }

  makeSearch(term: string): Observable<Song[]> {
    const apiURL = `${this.apiURL}?term=${term}&media=music&limit=20`;
    return this.httpClient.jsonp(`${apiURL}`, 'callback').pipe(map(res=> {
      return res['results'].map(item =>{
        return new SongItem(
          item.artworkUrl100, 
          item.artistName, 
          item.trackName
        )
      })
    }))
  }
}

class SongItem {
  constructor(
    public artworkUrl100: string,
    public artistName: string,
    public trackName: string
  ){

  }
}