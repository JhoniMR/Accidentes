/*///<reference types="@types/googlemaps" />
//import MarkerClusterer from '@google/markerclusterer';
import * as MarkerClusterer from "@google/markerclusterer"*/
import { Component, OnInit } from "@angular/core";
import { AccidentesService } from '../services/accidentes.service';

/*
interface marker {
	lat: number;
  lng: number;
  icono: string;
  tipo: string;
  text: string;
  img:string;
//	label?: string;
	//draggable: boolean;
}*/

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {

  lat = 4.1420002;
  lng = -73.6266403;
  zoom = 12
/*
  locations: marker [] =[

    {
      lat: 4.128208,
      lng: -73.638240,
      icono:"../../assets/map/car.svg",
      tipo:"carro",
      text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      img:"../../assets/img/people.jpg"
    },
    {
      lat: 4.129567,
      lng: -73.640209,
      icono:"../../assets/map/car.svg",
      tipo:"carro",
      text:"Lorem ipsum dolor sit amet consectetur,adipisicing elit.",
      img:"../../assets/img/bus.jpg"
    },
    {
      lat: 4.134222,
      lng: -73.637902,
      icono:"../../assets/map/car.svg",
      tipo:"carro",
      text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      img:"../../assets/img/buildings.jpg"
    },
    {
      lat: 4.147267,
      lng: -73.638598,
      icono:"../../assets/map/mot.svg", 
      tipo:"moto",
      text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      img:"../../assets/img/people.jpg"
    },
    {
      lat: 4.145922,
      lng: -73.631567,
      icono:"../../assets/map/mot.svg",
      tipo:"moto",
      text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      img:"../../assets/img/buildings.jpg"
    },
    {
      lat: 4.114920,
      lng: -73.649543,
      icono:"../../assets/map/car.svg",
      tipo:"moto",
      text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      img:"../../assets/img/people.jpg"
    },
    {
      lat: 4.089117,
      lng: -73.669685,
      icono:"../../assets/map/mot.svg",
      tipo:"moto",
      text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      img:"../../assets/img/bus.jpg"
    },
    {
      lat: 4.117119,
      lng: -73.625030,
      icono:"../../assets/map/mot.svg",
      tipo:"moto",
      text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      img:"../../assets/img/buildings.jpg"
    },
    {
      lat: 4.154574,
      lng: -73.629466,
      icono:"../../assets/map/car.svg",
      tipo:"moto",
      text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      img:"../../assets/img/people.jpg"
    },
    {
      lat: 4.180581,
      lng: -73.611462,
      icono:"../../assets/map/mot.svg",
      tipo:"carro",
      text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      img:"../../assets/img/bus.jpg"
    },
    {
      lat: 4.159213,
      lng: -73.645176, 
      icono:"../../assets/map/car.svg",
      tipo:"carro",
      text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      img:"../../assets/img/buildings.jpg"
    },
    {
      lat: 4.137879,
      lng: -73.648751,
      icono:"../../assets/map/mot.svg",
      tipo:"carro",
      text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      img:"../../assets/img/bus.jpg"
    },
    {
      lat: 4.152132,
      lng: -73.636287,
      icono:"../../assets/map/mot.svg",
      tipo:"carro",
      text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      img:"../../assets/img/people.jpg"
    },

  ]*/
  tweets =[
    {
      titulo:"Acidente",
      texto:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      img: "../../assets/img/buildings.jpg"
    },
    {
      titulo:"Acidente Carro",
      texto:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      img: "../../assets/img/bus.jpg"
    },
    {
      titulo:"Acidente Motocicleta",
      texto:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      img: "../../assets/img/people.jpg"
    },
    {
      titulo:"Acidente",
      texto:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      img: "../../assets/img/buildings.jpg"
    }
  ]
  
  labelOptions=
  {
    color:'#ee4646',
    fontFamily:'',
    //text:''
  }
  icon1 = { url: '../../assets/map/car.svg', scaledSize: {height: 40, width: 40}}
  icon2 = { url: '../../assets/map/mot.svg', scaledSize: {height: 40, width: 40}}




  //////// MOSTRAR Y OCULTAR BARRA INFERIROS
  public show:boolean = false;
  public buttonName:any = 'Show';
  clickedMarker(tipo: string, index: number) {
    //alert(`clicked the marker: ${tipo || index}`)
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }

 


  //ACCIDENTES
  public Arraccidentes :any = [];

  constructor(
    public accidentesservice : AccidentesService,
  ){}
  
  ngOnInit(): void {
    this.accidentesservice.getAccidentes().subscribe( accidentes => {
      this.Arraccidentes= accidentes;
    })
  }
  
}


