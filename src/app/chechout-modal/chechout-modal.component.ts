import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-chechout-modal',
  templateUrl: './chechout-modal.component.html',
  styleUrls: ['./chechout-modal.component.scss']
})
export class ChechoutModalComponent implements OnInit {

  constructor() { }
  markers : any= []
  zoom = 17
  center!: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: false,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    maxZoom: 18,
    minZoom: 8,
  }


  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        
      }
      this.markers.push({
        position: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
        label: {
          color: 'white',
          text: 'Your location ',
        },
        title: 'Location ',
        info: 'Marker info ' + (this.markers.length + 1),
        options: {
          animation: google.maps.Animation.BOUNCE,
        },
      })
    })
    
  }
 

}
