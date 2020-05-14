/*///<reference types="@types/googlemaps" />
//import MarkerClusterer from '@google/markerclusterer';
import * as MarkerClusterer from "@google/markerclusterer"*/
import { Component, OnInit } from "@angular/core";

declare var google: any;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  lat = 4.1420002;
  lng = -73.6266403;
  zoom = 14
  width=10

  locations = [

    {lat: 4.128208, lng: -73.638240, icono:"../../assets/map/car.svg"},
    {lat: 4.129567, lng: -73.640209, icono:"../../assets/map/car.svg"},
    {lat: 4.134222, lng: -73.637902, icono:"../../assets/map/car.svg"},
    {lat: 4.147267, lng: -73.638598, icono:"../../assets/map/mot.svg"},
    {lat: 4.145922, lng: -73.631567},
    {lat: 4.114920, lng: -73.649543},
    {lat: 4.089117, lng: -73.669685},
    {lat: 4.117119, lng: -73.625030},
    {lat: 4.154574, lng: -73.629466},
    {lat: 4.180581, lng: -73.611462},
    {lat: 4.159213, lng: -73.645176},
    {lat: 4.137879, lng: -73.648751},
    {lat: 4.152132, lng: -73.636287},

  ]
  
  labelOptions={
    color:'#ee4646',
    fontFamily:'',
    //text:''
  }
  icon = { url: '../../assets/map/car.svg', scaledSize: {height: 40, width: 40}}

  constructor(){
  }

  ngOnInit(): void {
    
  }
}
