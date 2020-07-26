import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpApiComponent } from './practices/http/http-api/http-api.component';
import { HttpPromiseApiComponent } from './practices/http/http-promise-api/http-promise-api.component';

const routes: Routes = [
  {path: "inicio", component: HttpPromiseApiComponent},
  {path: "**", redirectTo: "inicio", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
