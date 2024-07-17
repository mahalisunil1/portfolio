import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-bg-light-rim',
  templateUrl: './bg-light-rim.component.html',
  styleUrl: './bg-light-rim.component.scss'
})
export class BgLightRimComponent implements OnInit{
    
    constructor(
      @Inject(PLATFORM_ID) private platformId: Object,
    private elementRef: ElementRef ) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {      
      const blob = this.elementRef.nativeElement.querySelector('.blob');
  
      window.onpointermove = event => { 
        const { clientX, clientY } = event;
        
        blob.animate({
          left: `${clientX}px`,
          top: `${clientY}px`
        }, { 
          duration: 1000,
          fill: 'forwards' 
        });
      };
    }
  }
}
