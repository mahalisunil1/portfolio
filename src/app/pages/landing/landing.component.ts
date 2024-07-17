import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  PLATFORM_ID,
  Renderer2,
  ViewChild,
} from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Lenis from 'lenis';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent implements AfterViewInit {
  model: string = 'assets/images/portfolio_sunil.png';
  smoothScrollingConfigured:boolean = false

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

  @ViewChild('scrollX') scrollX!: ElementRef;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef,
    private renderer: Renderer2
  ) {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const section_lg = gsap.utils.toArray('.section-lg');

      const horizontalScrollAnimation = gsap.to(section_lg, {
        xPercent: -100 * (section_lg.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: '.scrollX',
          start: 'top top',
          snap: 1 / (section_lg.length - 1),
          end: this.scrollX.nativeElement.offsetWidth - 100,
          scrub: 2,
          pin: true,
        }
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.hero-lg',
            scrub: 0.1,
            start: 'right right',
            end: 'right left',
            containerAnimation: horizontalScrollAnimation,
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
          '-=3.7'
        )
        .to('.progress-svg', {
          y: '-10vh',
          duration: 16,
        })
        .to('.mask', {
          width: '50%',
          duration: 4,
        })
        .to('.mask', {
          width: '100%',
          duration: 4,
        })
        .to('.about-reveal-h1', {
          y: '-2.5vh',
        })
        .to('.about-reveal-h1', {
          y: '-5vh',
          ease: 'elastic.out',
        })
        .to('.about-reveal-h1', {
          color: '#fff',
        })
        .to('.fixed-layer-lg', {
          background: 'rgba(0,0,0,0.9)',
        })
        .to('.fixed-layer-lg', {
          background: 'rgba(0,0,0,0.8)',
        })
        .to('.fixed-layer-lg', {
          background: 'rgba(0,0,0,0.7)',
        })
        .to('.fixed-layer-lg', {
          background: 'rgba(0,0,0,0.6)',
        })
        .to('.fixed-layer-lg', {
          background: 'rgba(0,0,0,0.5)',
        })
        .to('.fixed-layer-lg', {
          background: 'rgba(0,0,0,0.4)',
        })
        .to('.fixed-layer-lg', {
          background: 'rgba(0,0,0,0.3)',
        })
        .to('.fixed-layer-lg', {
          background: 'rgba(0,0,0,0.2)',
        })
        .to('.fixed-layer-lg', {
          background: 'rgba(0,0,0,0.1)',
        })
        .to('.fixed-layer-lg', {
          background: 'transparent'
        });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.extra-width',
            start: 'left 10%',
            end: 'left 3%',
            containerAnimation: horizontalScrollAnimation,
            scrub: 4,
          },
        })
        .from('.about-text', {
          y: '-50vh',
        })
        .from('.services-header-lg', {
          x: '-50vh',
        })
        .to('.services-item-lg', {
          opacity: 1,
          transform: 'scale(1)',
          stagger: 0.1,
        });

      // gsap.timeline({
      //   scrollTrigger:{
      //     trigger:".contact-lg",
      //     start:"35% bottom",
      //     scrub:4,
      //     end:"65% bottom",
      //     onEnter: () => {
      //     if (!this.smoothScrollingConfigured) {
      //       this.initiateSmoothScrolling()
      //     }
      //     }
      //   }
      // }).from(".grid-layer",{
      // width:0,
      //  opacity:0,
      // duration:6
      // }).from(".grid-items",{
      //   border:"0.1rem solid rgb(255,255,255,0.2)"
      // }).from(".contact-lg",{
      //   background:"rgba(0,0,0,.9)"
      // }).from(".testbox",{
      //   width:"100%",
      //   borderRadius:0,
      //   duration:16
      // },"-=2")

      gsap.timeline({
        scrollTrigger:{
          trigger:".contact-lg",
          start:"10% bottom",
          scrub:3,
          end:"75% bottom",
          onEnter: () => {
          if (!this.smoothScrollingConfigured) {
            this.initiateSmoothScrolling()
          }
          }
        }
      })
      .from(".grid-layer",{
        width:0,
        opacity:0
      })
      .from(".contact-lg",{
        background:"rgba(0,0,0,0.7)"
      })
      .from(".grid-items",{
        border:" 0.1rem solid rgb(255,255,255,0.3)"
      })
      .from(".contact-section-bg-text",{
        height:0,
        y:"-15vh"
      },"-=1")
      .from(".testbox",{
        opacity:0,
        y:"15vh"
      })

      this.initTimeLine_lg();
      setTimeout(() => {
        this.typeWriter();
      }, 3000);
      this.cdr.detectChanges();
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
      .add(this.secne14_lg(), '-=1');
  }

  initiateSmoothScrolling(){
    const lenis = new Lenis();
      
    lenis.on('scroll', (e:any) => {
      // This is where you handle the scroll updates
      ScrollTrigger.update();
    });

    gsap.ticker.add((time) => {
      lenis.raf(time * 1200);
    });

    gsap.ticker.lagSmoothing(0);

    this.smoothScrollingConfigured = true
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
    });

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

  secne14_lg() {
    var tl = gsap.timeline();

    tl.to('.gear-lg', {
      color: '#FF7F11',
    }).to('.gear-lg', {
      rotation: '+=360',
      duration: 2,
      ease: 'none',
      repeat: -1,
    });

    return tl;
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
