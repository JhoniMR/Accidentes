import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { TopSdenavComponent } from './top-sdenav/top-sdenav.component';



const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  // {path: '/', component: AppComponent },
  {path: 'login', component: LoginComponent},
  {path: 'map', component: MapComponent},
  {path: 'sdenav', component: TopSdenavComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
