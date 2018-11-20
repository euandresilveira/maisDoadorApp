import { Component, ViewChild } from '@angular/core';
import { google } from '@google/maps';

declare var google: any; 

@Component({
  selector: 'google-map',
  templateUrl: 'google-map.html'
})
export class GoogleMapComponent {

  @ViewChild("map") mapElement;
  map: any;
  constructor() {
    
  }

  ngOnInit(){
    this.initMap();
  }

  initMap() {
    let latLng = new google.maps.LatLng(-12.9960307, -38.4898505);
    
    let mapOptions: google.maps.MapOptions = {
      center: latLng,
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);    
    
    var locations = [
      ['Hemocentro Coordenador - Salvador', -12.9960307, -38.4898505, 3],
      ['UC Hemoba - Obras Sociais Irmã Dulce', -12.9350256, -38.5066486, 2],
      ['UC Hemoba - Hospital do Subúrbio', -12.8650344, -38.4567497, 1]
    ];
    
    var infowindow = new google.maps.InfoWindow();
    
    var marker, i;
    
    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(Number(locations[i][1]), Number(locations[i][2])),
        map: this.map
      });
    
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0].toString());
          infowindow.open(this.map, marker);
        }
      })(marker, i));
    }
  }
}
