import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-liquid-svg-background',
  templateUrl: './liquid-svg-background.component.html',
  styleUrls: ['./liquid-svg-background.component.scss']
})
export class LiquidSvgBackgroundComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
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
