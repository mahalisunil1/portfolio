import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  HostListener,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent implements AfterViewInit {
  model: string = 'assets/images/hero_section_final_bg.png';
  textArray: string[] = ['Code', 'Design', 'Implement'];
  i: number = 0;
  a: number = 0;
  isBackspacing: boolean = false;
  isParagraph: boolean = false;

  speedForward: number = 100;
  speedWait: number = 2200;
  speedBetweenLines: number = 500;
  speedBackspace: number = 22;
  typeWriterTimeOut!: number;
  eHeader: string = '';
  eParagraph: string = '';

  screenWidth!: number;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef
  ) {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.screenWidth = window.innerWidth;
    // Perform actions based on the new width or simply track it
    console.log(`Window resized to: ${this.screenWidth}px`);
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {

      // if (this.screenWidth < 1024) {
        
      // } else {
        // }
          this.masterTimelineLg();
          this.masterTimeLineSm()

      setTimeout(() => {
        this.typeWriter();
      }, 2800);
      this.cdr.detectChanges();
    }
  }

  masterTimelineLg() {
    gsap
      .timeline()
      .add(this.scene1_lg())
      .add(this.scene2_lg(), '-=1')
      .add(this.scene3_lg(), '-=1.8')
      .add(this.scene4_lg(), '-=2')
      .add(this.scene5_lg(), '-=2')
      .add(this.scene6_lg(), '-=2.9')
      .add(this.scene7_lg(), '-=2')
      .add(this.scene8_pre_patch(), '-=1.7')
      .add(this.scene8_lg(), '-=2.9')
      .add(this.scene9_lg(), '-=.6')
      .add(this.scene10_lg(), '-=0.5')
      .add(this.scene11_lg(), '-=0.8')
      .add(this.scene12_lg(), '-=0.8');
  }

  masterTimeLineSm(){
    gsap.timeline().add(this.scene1_sm())
                   .add(this.scene2_sm())
                   .add(this.scene3_sm(),"-=1")
                   .add(this.scene4_sm(),"-=1.5")
                   .add(this.scene5_sm(),"-=1")
  }

  scene1_lg() {
    var tl = gsap.timeline();

    tl.from('.center-phrase-stagger-lg', {
      stagger: 0.1,
      y: 100,
      duration: 1,
    });

    return tl;
  }

  scene2_lg() {
    var tl = gsap.timeline();

    tl.from('.arrow-lg', {
      y: 100,
      duration: 1,
    })
      .to('.arrow-container-lg', {
        rotate: '135deg',
        duration: 1,
        delay: 0.5,
      })
      .to('.fill', {
        fill: '#FF7F11',
      });

    return tl;
  }

  scene3_lg() {
    var tl = gsap.timeline();

    tl.from('.box-stagger-lg', {
      stagger: 0.2,
      width: '100%',
      ease: 'power3.out',
      duration: 1.7,
    });

    return tl;
  }

  scene4_lg() {
    var tl = gsap.timeline();

    tl.from('.bottom-stagger-lg', {
      stagger: 0.1,
      y: '18rem',
      ease: 'power3.out',
      duration: 0.7,
    });

    return tl;
  }

  scene5_lg() {
    var tl = gsap.timeline();

    tl.to('.left-reveal-stagger', {
      stagger: 0.1,
      top: 0,
      x: "100vw",
      duration: 1.7,
      ease: 'power3.out',
    });
    return tl;
  }

  scene6_lg() {
    var tl = gsap.timeline();

    tl.to('.left-reveal-stagger', {
      background: '#0F0F0F',
    });
    return tl;
  }

  scene7_lg() {
    var tl = gsap.timeline();

    tl.to('.right-reveal-stagger', {
      stagger: 0.1,
      top: 0,
      x: "-100vw",
      duration: 1.7,
      ease: 'power3.out',
    });
    return tl;
  }

  scene8_pre_patch() {
    var tl = gsap.timeline();

    tl.from('.bg-img-lg', {
      opacity: 0,
    });

    return tl;
  }

  scene8_lg() {
    var tl = gsap.timeline();

    tl.to('.right-reveal-stagger', {
      background: '#0F0F0F',
    })
      .from('.gear-container-lg', {
        y: -300,
        delay: 1,
      })
      .to('.gear-container-lg', {
        x: '12vw',
        rotate: '360deg',
      });

    return tl;
  }
  scene9_lg() {
    var tl = gsap.timeline();

    tl.from('.I-lg', {
      y: '-6rem',
    });

    return tl;
  }

  scene10_lg() {
    var tl = gsap.timeline();

    tl.from('.stagger-marker-box-1-lg', {
      stagger: 0.2,
      duration: 0.8,
      ease: 'power3.out',
      y: 100,
    });

    return tl;
  }

  scene11_lg() {
    var tl = gsap.timeline();

    tl.to('.gear-lg', {
      color: '#FF7F11',
    });

    return tl;
  }

  scene12_lg() {
    var tl = gsap.timeline();

    tl.to('.gear-container-lg', {
      rotation: '+=360',
      repeat: -1,
      duration: 2,
      ease: 'none',
    });

    return tl;
  }

  scene1_sm(){
   var tl = gsap.timeline()

   tl.from(".phrase-stagger-sm",{
    stagger:.1,
    ease:"power3.out",
    y:"8rem",
    duration:1
   })
   return tl
  }

  scene2_sm(){
    var tl = gsap.timeline()
 
    tl.to(".image-reveal-left-sm",{
     stagger:.1,
     ease:"power3.out",
     x:"-100vw",
     duration:1
    })
    return tl
   }

   scene3_sm(){
    var tl = gsap.timeline()
 
    tl.to(".image-reveal-right-sm",{
     stagger:.1,
     ease:"power3.out",
     x:"100vw",
     duration:1
    })
    return tl
   }

   scene4_sm(){
    var tl = gsap.timeline()
 
    tl.to(".phrase-layer-sm",{
     top:"70%",
     height:"30%",
    //  background:"red",
     duration:1
    })
    return tl
   }

   scene5_sm(){
    var tl = gsap.timeline()
 
    tl.from(".hero-sm-bg-stagger",{
    stagger:.1,
    y:"10rem",
     duration:.6,
     ease:"power3.out",
    //  background:"orangered"
    })
    return tl
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
