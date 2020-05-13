import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})

export class FeedComponent implements OnInit {

  peliculas:any[]=[
    {name:'Sala De Prensa',
    img:'../../assets/img/buildings.jpg',
    desc:'No paramos, no nos rendimos, Nuestra ciudad puede con todo y demostraremos que pase lo que pase seguiremos luchando.#CuidémonosJuntos #VillavicencioCuenta Contigo Publicado hace 2 horas'},
    {
      name:'Sala De Prensa',
      img:'../../assets/img/chicago.jpg',
      desc:'No paramos, no nos rendimos, Nuestra ciudad puede con todo y demostraremos que pase lo que pase seguiremos luchando.#CuidémonosJuntos #VillavicencioCuenta Contigo Publicado hace 2 horas'},
  ];


  constructor(private _config:NgbCarouselConfig) {
    _config.interval = 4000;
    _config.pauseOnHover = true;
    _config.showNavigationArrows = false;
   }

  ngOnInit(): void {
  }

}
