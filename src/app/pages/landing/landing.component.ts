import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements AfterViewInit{

  model:string = "assets/images/portfolio_sunil.png"
 
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

  constructor( private cdr: ChangeDetectorRef){
    gsap.registerPlugin(ScrollTrigger)
  }

ngAfterViewInit(): void {
  const section_lg = gsap.utils.toArray(".section-lg")

  gsap.to(section_lg,{
    xPercent: -100*(section_lg.length - 1),
    ease:"none",
    scrollTrigger:{
      trigger:".scrollX",
      start:"top top",
      snap: 1 / (section_lg.length - 1),
      end:3000,
      scrub:.5,
      pin:true,
    }
  })

  gsap.timeline({
    scrollTrigger:{
      trigger:".hero-lg",
      start:"center center",
      scrub:1,
    }
  }).to(".hero-lg",{
    opacity:0
  })
  .from(".progress-svg",{
    ease:"power3.out",
    opacity:0,
  }).from(".about-reveal-h1",{
    y:200,
    ease:"elastic.inOut",
    duration:4
  }).to(".bg-img-lg",{
    zIndex:3,
    onComplete:() => {
      var tl = gsap.timeline()

      tl.to(".about-page-linked-stagger-lg",{
        // opacity:0,
        stagger:.1,
        y:"-50vh",
        // delay:3
        duration:1.2,
      }).to(".services-item-lg",{
        stagger:.1,
        opacity:1,
        transform:"scale(1)"
      })
    }
  }).to(".about-reveal-h1",{
    color:"#fff"
  })

  gsap.to(".mask",{
    width:"100%",
    ease:"power3.out",
    delay:2,
    duration:4,
    scrollTrigger:{
      trigger:".scrollX",
      start:"45% center",
      markers:true,
      scrub:1,
      end:3000
    }
  })

  this.initTimeLine_lg()
  setTimeout(() => {
    this.typeWriter()
  }, 3000);
  this.cdr.detectChanges()
}

initTimeLine_lg(){
  gsap.timeline().add(this.secne1_lg())
                 .add(this.secne2_lg(),"-=1.5")
                 .add(this.secne3_lg(),"-=1.5")
                 .add(this.secne4_lg(),"-=.5")
                 .add(this.secne5_lg(),"-=1.5")
                 .add(this.secne6_lg(),"-=1.3")
                 .add(this.secne7_lg(),"-=1.5")
                 .add(this.secne8_lg(),"-=1.5")
                 .add(this.secne9_lg(),"-=1")
                 .add(this.secne10_lg(),"-=1")
                 .add(this.secne11_lg(),"-=1.5")
                 .add(this.secne12_lg(),"-=1")
                 .add(this.secne13_lg(),"-=1")
                 .add(this.secne14_lg(),"-=1")
}

secne1_lg(){
  var tl = gsap.timeline()

  tl.from(".phrase-lg",{
    stagger:.1,
    y:"4rem",
    delay:.5,
    duration:1.5,
    ease:"power3.out"
  })

  return tl
}

secne2_lg(){
  var tl = gsap.timeline()

  tl.from(".arrow-lg",{
    y:"25vh",
    duration:1.5,
    ease:"power3.out"
  })

  return tl
}

secne3_lg(){
  var tl = gsap.timeline()

  tl.to(".img-reveal-stagger-lg",{
    background:"#121212",
    duration:1,
    ease:"power3.out"
  })

  return tl
}

secne4_lg(){
  var tl = gsap.timeline()

  tl.to(".img-reveal-left-lg",{
    stagger:.1,
    x:"-50vw",
    duration:1,
    ease:"power3.out"
  })

  return tl
}

secne5_lg(){
  var tl = gsap.timeline()

  tl.to(".img-reveal-right-lg",{
    stagger:.1,
    x:"50vw",
    duration:1,
    ease:"power3.out"
  })

  return tl
}

secne6_lg(){
  var tl = gsap.timeline()

  tl.from(".bg-img-lg-marker",{
    opacity:0
  })

  return tl
}

secne7_lg(){
  var tl = gsap.timeline()

  tl.from(".box-stagger-lg",{
    width:"100%",
    stagger:.1,
    duration:1
  })

  return tl
}

secne8_lg(){
  var tl = gsap.timeline()

  tl.to(".arrow-container-lg",{
    rotate:"135deg",
    duration:1
  })

  return tl
}

secne9_lg(){
  var tl = gsap.timeline()

  tl.to(".fill",{
    fill:"#FF7F11"
  })

  return tl
}

secne10_lg(){
  var tl = gsap.timeline()

  tl.from(".letter-stagger-lg",{
    y:"16rem",
    stagger:.1,
    ease:"power3.out"
  })

  return tl
}

secne11_lg(){
  var tl = gsap.timeline()

  tl.from(".gear-container-lg",{
    y:"-50vh",
    ease:"power3.out",
    duration:1,
    rotate:"225deg"
  }).to(".gear-container-lg",{
    x:"15vw",
    ease:"power3.out",
    duration:1,
    rotate:"360deg"
  })

  return tl
}

secne12_lg(){
  var tl = gsap.timeline()

  tl.from(".i-lg",{
    y:"-6rem",
    ease:"power3.out",
    duration:1,
  })

  return tl
}

secne13_lg(){
  var tl = gsap.timeline()

  tl.from(".box-1-animation-text-stagger-lg",{
    y:300,
    ease:"power3.out",
    duration:1,
  })

  return tl
}

secne14_lg(){
  var tl = gsap.timeline()

  tl.to(".gear-lg",{
    color:"#FF7F11"
  })
  .to(".gear-lg",{
    rotation:"+=360",
    duration:2,
    ease:"none",
    repeat:-1
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


