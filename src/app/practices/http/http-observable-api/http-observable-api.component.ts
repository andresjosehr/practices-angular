import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { SearchService } from "./search-service/search.service"
import { Song } from '../http-promise-api/song-interface/song';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-http-observable-api',
  templateUrl: './http-observable-api.component.html',
  styleUrls: ['./http-observable-api.component.sass']
})
export class HttpObservableApiComponent implements OnInit {

  public  songs: Observable<Song[]>;

  public inputSearch: FormControl;

  constructor(
    public searchService: SearchService
    ) { }

  ngOnInit(): void {
    this.inputSearch = new FormControl([]),
    this.inputSearch.valueChanges.pipe(debounceTime(500), distinctUntilChanged()).subscribe(val => {
      this.songs = this.searchService.search(val)
    })
  }

}
