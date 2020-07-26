import { Component, OnInit, ɵConsole } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http"

@Component({
  selector: 'app-http-api',
  templateUrl: './http-api.component.html',
  styleUrls: ['./http-api.component.sass']
})
export class HttpApiComponent implements OnInit {

  apiURL: string = 'https://httpbin.org';

  constructor(
    private HttpClient: HttpClient
  ) { }

  ngOnInit(): void {
  }

  doGET() {

    console.log("GET");
    const url = `${this.apiURL}/get`;

    let httpParams = new HttpParams().set('aaa', '111').set('bbb', '222');
    let options = { params: httpParams };

    this.HttpClient.get(url, options).subscribe(res => console.log(res));
  }

  doPOST() {
    console.log("POST");

    const url = `${this.apiURL}/post`;

    let httpParams = new HttpParams().set('aaa', '111').set('bbb', '222');

    let options = { params: httpParams };

    this.HttpClient.post(`${url}`, {param1: "1", param2: "2"}, options).subscribe(res=>console.log(res))
  }

  doPUT() {
    console.log("PUT");

    const url = `${this.apiURL}/put`

    const httpParams = new HttpParams().set("aaa", "111").set("bbb", "222");

    const options = {params: httpParams}

    this.HttpClient.put(url, {param1: "param", param2: "param"}, options).subscribe(res=>console.log(res));
    
  }

  doDELETE() {
    console.log("DELETE");

    const url = `${this.apiURL}/delete`;

    let httpParams = new HttpParams().set('aaa', '111').set('bbb', '222');

    let options = { params: httpParams };

    this.HttpClient.delete(`${url}`, options).subscribe(res => console.log(res))
  }

  doGETAsPromise() {
    console.log("GET AS PROMISE");
  }

  doGETAsPromiseError() {
    console.log("GET AS PROMISE ERROR");
    
    let url= `${this.apiURL}/post`

    this.HttpClient.get(url).toPromise().then().catch((err) => console.log("Hay un error en la peticion"))
  }

  doGETAsObservableError() {
    console.log("GET AS OBSERVABLE ERROR");

    const url = `${this.apiURL}/post`;

    this.HttpClient.get(url).subscribe(
      res => console.log("Peticion exitosa"),
      meg => console.log("Error en la peticion")
    );
  }

  doGETWithHeaders() {
    console.log("GET WITH HEADERS");

    const url =`${this.apiURL}/get`;
    
    const headers = new HttpHeaders().append("Authorization", btoa('username:password'))

    console.log(headers)

    this.HttpClient.get(url, {headers}).subscribe(
      res => console.log(res)
    )

  }

}
