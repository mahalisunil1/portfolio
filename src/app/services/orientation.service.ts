import { HostListener, Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OrientationService {
  // lastOrientationIsLandscape: boolean = window.innerWidth > window.innerHeight;
 private currentOrientationSubject = new BehaviorSubject<boolean>(false)
 currentOrientation = this.currentOrientationSubject.asObservable()
  constructor(private breakpointObserver: BreakpointObserver) {
    this.initializeOrientationListener();
  }
  initializeOrientationListener() {
    // Subscribe to breakpoint changes
    this.breakpointObserver.observe([
      Breakpoints.HandsetPortrait,
      Breakpoints.HandsetLandscape,
      Breakpoints.TabletPortrait,
      Breakpoints.TabletLandscape,
      Breakpoints.WebPortrait,
      Breakpoints.WebLandscape
    ]).subscribe(result => {
      if (result.matches) {
        if (result.breakpoints[Breakpoints.HandsetPortrait]) {
          // this.logOrientation('Mobile Portrait');
          this.mobilePortrait()
          // this.currentOrientation = false
        } else if (result.breakpoints[Breakpoints.HandsetLandscape]) {
          // this.logOrientation('Mobile Landscape');
          this.mobileLandscape()
          // this.currentOrientation = true
        } else if (result.breakpoints[Breakpoints.WebPortrait] || result.breakpoints[Breakpoints.TabletPortrait]) {
          // this.logOrientation('Desktop Portrait');
        } else if (result.breakpoints[Breakpoints.WebLandscape] || result.breakpoints[Breakpoints.TabletLandscape]) {
          // this.logOrientation('Desktop Landscape');
        }
      }
    });
  }
  mobileLandscape(){
   this.currentOrientationSubject.next(true)
  }
  mobilePortrait(){
    this.currentOrientationSubject.next(false)
   }
  logOrientation(orientation: string) {
    console.log(orientation);
  }
}
