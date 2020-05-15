import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { TopSdenavComponent } from './top-sdenav/top-sdenav.component';
import { GraficasComponent } from './graficas/graficas.component';


const routes: Routes = [
  {path: '', redirectTo: 'feed', pathMatch: 'full'},
  //{path: '/', component: AppComponent},
  {path: 'feed', component: FeedComponent },
  {path: 'graficas', component: GraficasComponent},
  {path: 'login', component: LoginComponent},
  {path: 'map', component: MapComponent},
  {path: 'map', component: MapComponent},
  {path: 'sdenav', component: TopSdenavComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
