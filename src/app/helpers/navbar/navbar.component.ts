import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements AfterViewInit{

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ){}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
         this.masterTimelineLg()
    }
  }

  masterTimelineLg(){
  gsap.timeline().add(this.scene1_lg())
                 .add(this.scene2_lg(),"-=.6")
  }

  scene1_lg(){
    var tl = gsap.timeline()

    tl.from(".menu-items",{
      y:200,
      stagger:.1,
      ease:"power3.out",
      duration:1,
      delay:3
    })

return tl
  }

  scene2_lg(){
    var tl = gsap.timeline()

    tl.from(".active-marker",{
      transform:"scale(.3)"
    })

return tl
  }
}

