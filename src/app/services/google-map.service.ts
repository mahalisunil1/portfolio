import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapService {
  private mapsLoaded = false;
  private mapsLoadPromise!: Promise<void>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  loadGoogleMaps(apiKey: string): Promise<void> {
    if (!isPlatformBrowser(this.platformId)) {
      // If not on browser, resolve immediately to avoid errors in SSR
      return Promise.resolve();
    }

    if (this.mapsLoaded) {
      return Promise.resolve();
    }

    if (!this.mapsLoadPromise) {
      this.mapsLoadPromise = new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
        script.async = true;
        script.defer = true;
        script.onload = () => {
          this.mapsLoaded = true;
          resolve();
        };
        document.head.appendChild(script);
      });
    }

    return this.mapsLoadPromise;
  }
}
