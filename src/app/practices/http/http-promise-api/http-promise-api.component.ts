import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms"
import { debounceTime, distinctUntilChanged } from "rxjs/operators"
import { SearchService } from "./search-service/search.service"


@Component({
  selector: 'app-http-promise-api',
  templateUrl: './http-promise-api.component.html',
  styleUrls: ['./http-promise-api.component.sass']
})
export class HttpPromiseApiComponent implements OnInit {

  public inputSearch: FormControl;
  public loading: boolean = false;
  
  constructor(
    private searchService: SearchService
    ) { }

  ngOnInit(): void {
    this.inputSearch = new FormControl([]),
    this.inputSearch.valueChanges.pipe(debounceTime(500), distinctUntilChanged()).subscribe(val => {
      this.searchService.search(val);
    })
  }

}
