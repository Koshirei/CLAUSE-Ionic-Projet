import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import * as L from 'leaflet';

@Component({
  selector: 'app-geolocalisation',
  templateUrl: './geolocalisation.page.html',
  styleUrls: ['./geolocalisation.page.scss'],
})
export class GeolocalisationPage implements OnInit {

  private map: any;

  constructor() { }

  ngOnInit() {
    this.showLocation()
  }

  showLocation = async () => {
    const coordinates = await Geolocation.getCurrentPosition({enableHighAccuracy:true});

    this.map = L.map('map', {
      center: [ coordinates.coords.latitude, coordinates.coords.longitude ],
      zoom: 15
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    
    // on doit faire une icon custom car webpack supprime celle de base de leaflet ...
    L.marker(
      [coordinates.coords.latitude, coordinates.coords.longitude], 
      {
        icon: L.icon({
          iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Google_Maps_icon_%282020%29.svg/1428px-Google_Maps_icon_%282020%29.svg.png",
          iconSize: [20,30]
        })
      }
    ).addTo(this.map)

    tiles.addTo(this.map);
  }

}
