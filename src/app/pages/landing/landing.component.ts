import { Subscription } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Inject,
  OnDestroy,
  PLATFORM_ID,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Router } from '@angular/router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Lenis from 'lenis';
import { OrientationService } from '../../services/orientation.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent implements AfterViewInit,OnDestroy {
  model: string = 'assets/images/portfolio_sunil.webp';
  SeoServices:string = "assets/images/services icons/statistics.png"
  AppDevelopmentServices:string = "assets/images/services icons/developer.png"
  WebDevelopmentServices:string = "assets/images/services icons/coding (1).png"
  smoothScrollingConfigured: boolean = false;
  currentPreview!:string
  playFooterAnimation:boolean = false

  textArray: string[] = ['Code', 'Design', 'Implement'];
  i: number = 0;
  a: number = 0;
  isBackspacing: boolean = false;
  isParagraph: boolean = false;
  initiateDynamicGridAnimation:boolean = false

  speedForward: number = 100;
  speedWait: number = 2200;
  speedBetweenLines: number = 500;
  speedBackspace: number = 22;
  typeWriterTimeOut!: number;
  eHeader: string = '';
  eParagraph: string = '';
  isHandsetLandscape!:boolean


orientation: string = 'portrait';

  @ViewChild('scrollX') scrollX!: ElementRef;
  @ViewChild('phone')phone!:ElementRef;
  @ViewChild('previewFrame')previewFrame!:ElementRef;
  @ViewChild('mapFrame')mapFrame!:ElementRef;
  @ViewChild('socials')socials!:ElementRef;
  @ViewChild('contactDetails')contactDetails!:ElementRef;
  @ViewChild('locationIcon')locationIcon!:ElementRef;
  @ViewChild('svg') svg!: ElementRef;
  @ViewChild('skillTitle') skillTitle!: ElementRef;
  @ViewChildren('verticalLinesLayer')verticalLinesLayer!:QueryList<ElementRef>

  isLandscape: boolean = window.innerWidth > window.innerHeight;
  // // Store the initial orientation
  lastOrientationIsLandscape: boolean = window.innerWidth > window.innerHeight;
  private tiltOrientationSubscription!: Subscription

  constructor(
    // @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef,
    private renderer: Renderer2,
    private router: Router,
    private orientationService: OrientationService,
    private breakpointObserver: BreakpointObserver
  ) {
    gsap.registerPlugin(ScrollTrigger);
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event:any) {

    const currentOrientationIsLandscape = window.innerWidth > window.innerHeight;
    // Check if orientation has changed
    if (currentOrientationIsLandscape !== this.lastOrientationIsLandscape) {
      // Update the last orientation to current
      this.lastOrientationIsLandscape = currentOrientationIsLandscape;

      // Reload the page if the orientation has changed
      // console.log("landscape")
      this.breakpointObserver.observe([
        Breakpoints.Handset,
        Breakpoints.TabletLandscape,
        Breakpoints.WebLandscape,
        Breakpoints.TabletPortrait,
        Breakpoints.WebPortrait
      ]).subscribe((result:any) => {
        if (result.matches) {
          if (result.breakpoints[Breakpoints.TabletLandscape] || result.breakpoints[Breakpoints.TabletPortrait] || result.breakpoints[Breakpoints.WebLandscape] || result.breakpoints[Breakpoints.WebPortrait]) {
      window.location.reload();
          } else {
            console.log("No reload")
    }
        }
      })
    }
  }

  ngAfterViewInit(): void {
    this.tiltOrientationSubscription = this.orientationService.currentOrientation.subscribe((data) => {
      this.isHandsetLandscape = data
      this.cdr.detectChanges()
      })
if (this.isLandscape) {
      const section_lg = gsap.utils.toArray('.section-lg');

      const horizontalScrollAnimation = gsap
        .timeline({
          scrollTrigger: {
            trigger: '.scrollX',
            start: 'top top',
            snap:{
               snapTo:1 / (section_lg.length - 1),
          duration:2
            },
        end: this.scrollX.nativeElement.offsetWidth - 100,
        scrub: 0.3,
            pin: true,
          },
        })
        .to(section_lg, {
          xPercent: -100 * (section_lg.length - 1),
          ease: 'none',
      // ease:"power3.inOut"
        });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.hero-lg',
            scrub: 1.5,
            start: 'right right',
            end: 'right 80%',
            containerAnimation: horizontalScrollAnimation,
        invalidateOnRefresh: true
          },
        })
        .to(
          '.i-container-lg',
          {
            height: 0,
            duration: 0.1,
          },
          '-=1'
        )
        .to(
          '.typewriter-text-container',
          {
            height: 0,
            duration: 0.1,
          },
          '-=1'
        )
        .to(
          '.plain-text-container',
          {
            height: 0,
            duration: 0.1,
          },
          '-=1'
        )
        .to(
          '.gear-lg',
          {
            opacity: 0,
            x: '-15vw',
            ease: 'power3.out',
            duration: 3,
          },
          '-=1'
        )
        .to('.arrow-container-lg', {
          height: 0,
          opacity: 0,
          duration: 10,
        })
        .to(
          '.phrase-container-lg',
          {
            stagger: 2,
            duration: 8,
            opacity: 0,
          },
          '-=2'
        )
        .to(
          '.letter-stagger-container-lg',
          {
            opacity: 0,
            ease: 'power3.out',
            duration: 25,
            stagger: 2,
          },
      '-=4'
        )
    .to(".scrollX",{
      background:"transparent",
      pointerEvents:"none",
      duration:20
    })
    .to('.fixed-layer-lg', {
      width:"90%",
      zIndex:7
    },"-=2")
    .to(".about-lg",{
      zIndex:6
    })

      gsap.to('.scroll-indication-container-lg div', {
        stagger: 0.2,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
      start: 'right 95%',
      end: '90% 90%',
          trigger: '.hero-lg',
          scrub: 2,
          containerAnimation: horizontalScrollAnimation,
        },
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.extra-width',
        start: 'left 66%',
            end: 'left left',
            containerAnimation: horizontalScrollAnimation,
        scrub: 2,
          },
        })
        .from('.about-text', {
          y: '-50vh',
          ease: 'power3.out',
      duration:10
    })
        .from('.services-header-lg', {
          x: '-50vh',
    })
    .to(".black-bg-placeholder",{
      opacity:0,
      duration:8,
      delay:2
        })
        .to('.services-item-lg', {
          opacity: 1,
          transform: 'scale(1)',
      stagger: 1,
          ease: 'power3.out',
      duration:10
        })
        .from('.line-lg', {
          height: 0,
          opacity: 0,
          ease: 'power3.out',
      duration:10
    },"-=3")
        .from('.skill-icon', {
          stagger: 0.1,
          opacity: 0,
          ease: 'power3.out',
          x: '8vw',
      duration:10
    })
        

        gsap.timeline({
          scrollTrigger:{
            trigger:".contact-lg",
            start:"top bottom",
            scrub: true,
            end:"bottom bottom", 
            snap:{
              snapTo:1,
          duration:1.5,
              ease:"power1.inOut"
            }
          }
        }).to(".about-lg",{
          transform:"scale(0.8)",
          overflow:"hidden",
          borderRadius:"20px",
          opacity:0,
        })
        .to(".fixed-layer-lg",{
          transform:"scale(0.8)",
          opacity:0
        },"-=0.5")
        .to(".contact-lg",{
          yPercent:0
        })
    

      gsap.timeline({
          scrollTrigger: {
            trigger: '.contact-lg',
            start: '20% bottom',
            scrub: 5,
            end: '90% bottom'    ,
            onEnter:() => {
             setTimeout(() => {
              const verticalWaveElements = gsap.utils.toArray(".vertical-div-groupby") as HTMLElement[];
              const horizontalWaveElements = gsap.utils.toArray(".horizontal-wave-div") as HTMLElement[];

              gsap.timeline()
              .to(verticalWaveElements,{
                width:"12.5vw",
                opacity:0.4,
                stagger:0.5,
                ease: "power1.inOut",  // Smooth transition for the animation
                background:"#353434",
                repeat:-1,
                yoyo:true
              })
              .to(horizontalWaveElements,{
                height:"12.5vh",
                stagger:0.4,
                opacity:0.4,
                ease: "power1.inOut",  // Smooth transition for the animation
                background:"#000",
                repeat:-1,
                yoyo:true
              },"-=4.5")  
             }, 2500);
            }      
          },
        })
        .from('.vertical-lines-layer', {
          width: 0,
          opacity: 0,
          border:"0.3px solid rgba(163, 163, 163, 0.8)",
          onComplete:() => {
            this.playFooterAnimation = true
            this.cdr.detectChanges()
            console.log(this.playFooterAnimation)
          }
        },"-=0.2")
        .from(
          '.horizontal-lines-layer',
          {
            height: 0,
            opacity: 0,
          border:"0.3px solid rgba(163, 163, 163, 0.8)",
          },"-=0.6")
          .from(".contact-bg-text",{
            height:0,
            y:-100
          })
          .from(".location-wrapper div",{
            x:"-50vw"
          },"-=0.4")
          .from(".socials-wrapper div",{
            y:"-60vh"
          },"-=0.4")
          .from(".contact-wrapper div",{
            x:"50vw"
          },"-=0.4")
          .from(".socials-header-wrapper h2",{
            opacity:0
          },"-=1")
          .from(".socials-header-wrapper span",{
            width:0
          })
         
     
        

      this.initTimeLine_lg();
      setTimeout(() => {
        this.typeWriter();
      }, 3000);
      this.cdr.detectChanges();
}else{
  // const sectionsSm = gsap.utils.toArray(".section-wrapper-one")
  gsap.timeline({
    scrollTrigger:{
      trigger:".about-section-sm",
      pin:true,
      scrub:1,
      snap:{
        snapTo:1,
        duration:1.2
      },
      start:"top top",
      end:"bottom top"
    }
  }).to(".about-section-sm",{
    transform:"scale(0.5)",
    borderRadius:"30px",
  opacity:0
  })
  .to(".about-section-sm",{
    yPercent:0,
  },"-=0.5")
  .to(".contact-section-sm",{
    yPercent:0,
  },"-=0.5")
gsap.timeline({
  scrollTrigger:{
    trigger:".hero-section-sm",
    pin:true,
    scrub:1,
    snap:{
      snapTo:1,
      duration:1.2
    },
    start:"top top",
    end:"bottom top"
  }
}).to(".hero-section-sm",{
  transform:"scale(0.5)",
  borderRadius:"30px",
  opacity:0,
  duration:10
})
.from(".about-header-wrapper span",{
  width:0,
  duration:7
}).from(".about-header-wrapper h3",{
  y:"6vh",
  stagger:0.1,
opacity:0,
duration:7
})
.from(".about-description-sm p",{
  opacity:0,
  y:75,
  duration:5
})
.from(".services-header-wrapper-sm h3",{
  x:"-25vw",
  opacity:0,
  duration:8
})
.from(".service-item-sm",{
  stagger:0.3,
  transform:"scale(0.5)",
  opacity:0,
  duration:8
})
gsap.timeline().from(".hero-phrase-stagger-sm p",{
  stagger:0.1,
  opacity:0,
  y:100,
  duration:1.5
})
.to(".img-reveal-stagger-sm",{
  background:"#1b1b1b"
})
.to(".hero-section-phrase-layer-sm",{
  y:"27%",
  delay:0.7
})
.to(".img-reveal-stagger-left-sm",{
  stagger:0.1,
  x:"-100vw",
},"-=0.5")
.to(".img-reveal-stagger-right-sm",{
  stagger:0.1,
  x:"100vw"
},"-=1")
.from(".bg-img-layer-sm img",{
  opacity:0
},"-=1")
.from(".bg-text-stagger-sm",{
  height:0,
  opacity:0,
  stagger:0.1,
  y:50
},"-=0.7")
.to(".hero-phrase-stagger-sm p span",{
  color:"#ec7f37"
})
.from(".bg-text-layer-sm mat-icon",{
  y:"-50vh",
  opacity:0,
},"-=1")
.to(".bg-text-layer-sm mat-icon",{
  x:"-62.5vw",
  duration:1,
  rotate:-360
})
.to(".bg-text-layer-sm mat-icon",{
  color:"#ec7f37"
},"-=0.6")
.to(".letter-rotate",{
  rotate:360,
},"-=0.5")
.to(".bg-text-layer-sm mat-icon",{
  rotation:"+=360",
  repeat:-1,
  ease:"none",
  duration:3,
  color:"#ec7f37"
})
}
  }

  ngOnDestroy(): void {
    if (this.tiltOrientationSubscription) {
      this.tiltOrientationSubscription.unsubscribe()
    }
  }
 
  initTimeLine_lg() {
    gsap
      .timeline()
      .add(this.secne1_lg())
      .add(this.secne2_lg(), '-=1.5')
      .add(this.secne3_lg(), '-=1.5')
      .add(this.secne4_lg(), '-=.5')
      .add(this.secne5_lg(), '-=1.5')
      .add(this.secne6_lg(), '-=1.3')
      .add(this.secne7_lg(), '-=1.5')
      .add(this.secne8_lg(), '-=1.5')
      .add(this.secne9_lg(), '-=1')
      .add(this.secne10_lg(), '-=1')
      .add(this.secne11_lg(), '-=1.5')
      .add(this.secne12_lg(), '-=1')
      .add(this.secne13_lg(), '-=1')
      .add(this.scene14_lg(), '-=0.7')
      .add(this.scene15_lg(), '-=1');
  }

  initiateSmoothScrolling() {
    // const lenis = new Lenis();

    // lenis.on('scroll', (e: any) => {
    //   ScrollTrigger.update();
    // });

    // gsap.ticker.add((time:any) => {
    //   lenis.raf(time * 1200);
    // });

    // gsap.ticker.lagSmoothing(0);

    // this.smoothScrollingConfigured = true;
  }

  secne1_lg() {
    var tl = gsap.timeline();

    tl.from('.phrase-lg', {
      stagger: 0.1,
      y: '4rem',
      delay: 0.5,
      duration: 1.5,
      ease: 'power3.out',
    });

    return tl;
  }

  secne2_lg() {
    var tl = gsap.timeline();

    tl.from('.arrow-lg', {
      y: '25vh',
      duration: 1.5,
      ease: 'power3.out',
    });

    return tl;
  }

  secne3_lg() {
    var tl = gsap.timeline();

    tl.to('.img-reveal-stagger-lg', {
      background: '#121212',
      duration: 1,
      ease: 'power3.out',
    });

    return tl;
  }

  secne4_lg() {
    var tl = gsap.timeline();

    tl.to('.img-reveal-left-lg', {
      stagger: 0.1,
      x: '-50vw',
      duration: 1,
      ease: 'power3.out',
    });

    return tl;
  }

  secne5_lg() {
    var tl = gsap.timeline();

    tl.to('.img-reveal-right-lg', {
      stagger: 0.1,
      x: '50vw',
      duration: 1,
      ease: 'power3.out',
    });

    return tl;
  }

  secne6_lg() {
    var tl = gsap.timeline();

    tl.from('.bg-img-lg-marker', {
      opacity: 0,
    })
    .to(".fixed-layer-lg",{
      zIndex:6,
    },"-=0.5")

    return tl;
  }

  secne7_lg() {
    var tl = gsap.timeline();

    tl.from('.box-stagger-lg', {
      width: '100%',
      stagger: 0.1,
      duration: 1,
    });

    return tl;
  }

  secne8_lg() {
    var tl = gsap.timeline();

    tl.to('.arrow-container-lg', {
      rotate: '135deg',
      duration: 1,
    });

    return tl;
  }

  secne9_lg() {
    var tl = gsap.timeline();

    tl.to('.fill', {
      fill: '#FF7F11',
    });

    return tl;
  }

  secne10_lg() {
    var tl = gsap.timeline();

    tl.from('.letter-stagger-lg', {
      y: '16rem',
      stagger: 0.1,
      ease: 'power3.out',
    });

    return tl;
  }

  secne11_lg() {
    var tl = gsap.timeline();

    tl.from('.gear-container-lg', {
      y: '-50vh',
      ease: 'power3.out',
      duration: 1,
      rotate: '225deg',
    }).to('.gear-container-lg', {
      x: '15vw',
      ease: 'power3.out',
      duration: 1,
      rotate: '360deg',
    });

    return tl;
  }

  secne12_lg() {
    var tl = gsap.timeline();

    tl.from('.i-lg', {
      y: '-6rem',
      ease: 'power3.out',
      duration: 1,
    });

    return tl;
  }

  secne13_lg() {
    var tl = gsap.timeline();

    tl.from('.box-1-animation-text-stagger-lg', {
      y: 300,
      ease: 'power3.out',
      duration: 1,
    });

    return tl;
  }

  scene15_lg() {
    var tl = gsap.timeline();

    tl.to('.gear-lg', {
      color: '#FF7F11',
    })
      .to('.gear-lg', {
        rotation: '+=360',
        duration: 2,
        ease: 'none',
        repeat: -1,
      })
      .from(
        '.chevron mat-icon',
        {
          stagger: 0.2,
          opacity: 0,
          repeat: -1,
          yoyo: true,
        },
        '-=1'
      );

    return tl;
  }

  scene14_lg() {
    var tl = gsap.timeline();

    tl.from('.scroll-indication-container-lg div', {
      stagger: 0.1,
      y: 100,
      opacity: 0,
    });
    return tl;
  }

  mapHover(){
    this.renderer.setStyle(this.mapFrame.nativeElement,"width","100%")
    this.renderer.setStyle(this.mapFrame.nativeElement,"height","100%")
    this.renderer.setStyle(this.mapFrame.nativeElement,"transition","0.3s linear")
  }

  contactHover(){
   this.renderer.setStyle(this.contactDetails.nativeElement,"width","100%")
   this.renderer.setStyle(this.contactDetails.nativeElement,"height","100%")
   this.renderer.setStyle(this.contactDetails.nativeElement,"transition","0.3s linear")
  }

  contactLeave(){
    this.renderer.setStyle(this.contactDetails.nativeElement,"width","90%")
    this.renderer.setStyle(this.contactDetails.nativeElement,"height","65%")
    this.renderer.setStyle(this.contactDetails.nativeElement,"transition","0.3s linear")
   }

   socialsHover(){
    this.renderer.setStyle(this.socials.nativeElement,"width","100%")
    this.renderer.setStyle(this.socials.nativeElement,"height","100%")
    this.renderer.setStyle(this.socials.nativeElement,"transition","0.3s linear")
  }
 
   socialsLeave(){
    this.renderer.setStyle(this.socials.nativeElement,"width","70%")
    this.renderer.setStyle(this.socials.nativeElement,"height","85%")
    this.renderer.setStyle(this.socials.nativeElement,"transition","0.3s linear")
   }

   previewHover(platform:string){
    if (platform === "facebook") {
      this.currentPreview = "assets/images/social-media-preview/facebook preview.webp"
    }
    else if (platform === "medium") {
      this.currentPreview = "assets/images/social-media-preview/medium preview.webp"
    }
    else if (platform === "linkedin") {
      this.currentPreview = "assets/images/social-media-preview/linkedin preview.webp"
    }
    else if (platform === "x") {
      this.currentPreview = "assets/images/social-media-preview/twitter preview.webp"
    }

    setTimeout(() => {
      this.renderer.setStyle(this.previewFrame.nativeElement,"transform","scale(1.2)")
      this.renderer.setStyle(this.previewFrame.nativeElement,"transition","0.2s linear")
      this.renderer.setStyle(this.previewFrame.nativeElement,"opacity","1")
    }, 300);
   }

   previewLeave(platform:string){

  this.currentPreview = ""
    this.renderer.setStyle(this.previewFrame.nativeElement,"transform","scale(1)")
    this.renderer.setStyle(this.previewFrame.nativeElement,"transition","0.2s linear")
    this.renderer.setStyle(this.previewFrame.nativeElement,"opacity","0")
   }

  mapLeave(){
    this.renderer.setStyle(this.mapFrame.nativeElement,"width","85%")
    this.renderer.setStyle(this.mapFrame.nativeElement,"height","80%")
    this.renderer.setStyle(this.mapFrame.nativeElement,"transition","0.3s linear")
      }

      redirect(type:string){
  // this.router.navigate([""])
  if (type === "facebook") {
    window.open('https://facebook.com/sunilMahali.codespace', '_blank');
  }else if(type === "medium"){
    window.open('https://medium.com/@sunil.kumars360', '_blank');
  }
  else if(type === "linkedin"){
    window.open('https://www.linkedin.com/in/sunil-mahali-6b04a3240/', '_blank');
  }
  else if(type === "x"){
    window.open('https://x.com/dev_sunilmahali', '_blank');
  }

      }

  typeWriter() {
    const aString = this.textArray[this.a];
    if (!this.isBackspacing) {
      if (this.i < aString.length) {
        {
          if (!this.isParagraph) {
            this.eHeader += aString.charAt(this.i);
          } else {
            this.eParagraph += aString.charAt(this.i);
          }
          this.i++;
          setTimeout(() => this.typeWriter(), this.speedForward);
        }
      } else if (this.i === aString.length) {
        this.isBackspacing = true;
        setTimeout(() => this.typeWriter(), this.speedWait);
      }
    } else {
      if (this.eHeader.length > 0 || this.eParagraph.length > 0) {
        if (this.eParagraph.length > 0) {
          this.eParagraph = this.eParagraph.substring(
            0,
            this.eParagraph.length - 1
          );
        } else if (this.eHeader.length > 0) {
          this.eHeader = this.eHeader.substring(0, this.eHeader.length - 1);
        }
        setTimeout(() => this.typeWriter(), this.speedBackspace);
      } else {
        this.isBackspacing = false;
        this.i = 0;
        this.isParagraph = false;
        this.a = (this.a + 1) % this.textArray.length;
        setTimeout(() => this.typeWriter(), 50);
      }
    }
  }
}
