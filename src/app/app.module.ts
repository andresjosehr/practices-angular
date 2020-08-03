import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpApiComponent } from './practices/http/http-api/http-api.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http'
import { MatButtonModule } from '@angular/material/button';
import { HttpPromiseApiComponent } from './practices/http/http-promise-api/http-promise-api.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms'
import {MatCardModule} from '@angular/material/card';
import { HttpObservableApiComponent } from './practices/http/http-observable-api/http-observable-api.component';
import { HttpJsonpApiComponent } from './practices/http/http-jsonp-api/http-jsonp-api.component';
import { ObservablesComponent } from './practices/observables/observables.component';
import { CounterComponent } from './practices/reusable-components/counter/counter.component';
import { CustomCounterComponent } from './practices/reusable-components/custom-counter/custom-counter.component';
import { CounterLayoutComponent } from './practices/reusable-components/counter-layout/counter-layout.component';




@NgModule({
  declarations: [
    AppComponent,
    HttpApiComponent,
    HttpPromiseApiComponent,
    HttpObservableApiComponent,
    HttpJsonpApiComponent,
    ObservablesComponent,
    CounterComponent,
    CustomCounterComponent,
    CounterLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    HttpClientJsonpModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
