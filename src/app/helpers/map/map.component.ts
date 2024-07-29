import { ChangeDetectorRef, Component, ElementRef, Inject, OnInit, PLATFORM_ID, Renderer2, ViewChild } from '@angular/core';
import { GoogleMapService } from '../../services/google-map.service';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements OnInit{
  // center: google.maps.LatLngLiteral = {lat: 20.296018600463867, lng: 85.82488250732422};
  // zoom: number = 14;

  // center: google.maps.LatLngLiteral = { lat: 20.296019, lng: 85.824883 };  // Coordinates for Bhubaneswar, India
  // zoom = 14;  // Set the zoom level
  map!: google.maps.Map; 
  @ViewChild('mapContainer') mapContainer!: ElementRef; // Reference to the map container

  center: google.maps.LatLngLiteral = { lat: 20.3256, lng: 85.8102 }; 
  zoom = 9; // Example zoom level
  saturation:number = -110

  constructor(
    private googleMapsService: GoogleMapService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.googleMapsService.loadGoogleMaps('AIzaSyDKPcNjoLDN4Oq6OxXgfdoGp7_KRl1ULEM')
        .then(() => {
          this.initMap();
        })
        .catch((error) => {
          console.error('Error loading Google Maps:', error);
        });
    }
  }

  hoverMap() {
    this.saturation = 0;
    this.updateMapStyles();
    this.cdr.detectChanges();
    // this.renderer.setStyle(this.mapContainer.nativeElement,"transform","scale(1.1)")
    // this.renderer.setStyle(this.mapContainer.nativeElement,"transition","0.3s linear")
  }

  leaveMap() {
    this.saturation = -110;
    this.updateMapStyles();
    // this.renderer.setStyle(this.mapContainer.nativeElement,"transform","scale(1)")
    // this.renderer.setStyle(this.mapContainer.nativeElement,"transition","0.3s linear")
    this.cdr.detectChanges();
  }

  private updateMapStyles() {
    const customStyles = [
      {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
          { "saturation": this.saturation }
        ]
      }
    ];

    this.map.setOptions({ styles: customStyles });
  }

  private initMap(): void {
    const mapOptions: google.maps.MapOptions = {
      center: this.center,
      zoom: this.zoom,
      styles: this.getStyles()
    };

    this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
    const marker = new google.maps.Marker({
      position: this.center,
      map: this.map,
    });
  }

  private getStyles(): google.maps.MapTypeStyle[] {
    return [
      {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
          { "saturation": this.saturation }
        ]
      }
    ];
  }

//   hoverMap(){
//    this.saturation = 0
//    this.cdr.detectChanges()
//   }

//    customStyles = [
//     {
//         "featureType": "all",
//         "elementType": "all",
//         "stylers": [
//             { "saturation": this.saturation }
//         ]
//     }
// ];


//   private initMap(): void {
//     const mapOptions: google.maps.MapOptions = {
//       center: this.center,
//       zoom: this.zoom,
//       styles:this.customStyles
//     };

//     const map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);

//     // Optionally add a marker
//     const marker = new google.maps.Marker({
//       position: this.center,
//       map: map,
//     });
//   }

}
