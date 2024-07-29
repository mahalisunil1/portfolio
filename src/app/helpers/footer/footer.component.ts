import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, Input, PLATFORM_ID, Renderer2 } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent{

  @Input()playFooterAnimation!:boolean

  // constructor(@Inject(PLATFORM_ID) private platformId: Object,private renderer: Renderer2){}

  // ngAfterViewInit(): void {
  //   if (isPlatformBrowser(this.platformId)) {  
  //     console.log(this.playFooterAnimation)

  //     if (this.playFooterAnimation) {
  //       // gsap.timeline().from(".footer-text-wrapper span",{
  //       //   opacity:0
  //       // }).from(".footer-line-wrapper span",{
  //       //   background:"red"
  //       // })
  //       // console.log("footer animation here --")
  //       setTimeout(() => {
  //         console.log(this.playFooterAnimation)
  //       }, 500);
  //     }
  //   }
  // }
}
