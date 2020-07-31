import { Component, OnInit } from '@angular/core';
import { SearchService } from './search-service/search.service';
import { Observable } from 'rxjs/internal/Observable';
import { Song } from '../http-promise-api/song-interface/song';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-http-jsonp-api',
  templateUrl: './http-jsonp-api.component.html',
  styleUrls: ['./http-jsonp-api.component.sass']
})
export class HttpJsonpApiComponent implements OnInit {

  public  songs: Observable<Song[]>;

  public inputSearch: FormControl;

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
    this.inputSearch = new FormControl([])

    this.inputSearch.valueChanges.pipe(debounceTime(400), distinctUntilChanged()).subscribe(val =>{
     this.songs = this.searchService.makeSearch(val)
    })
    
  }

}
