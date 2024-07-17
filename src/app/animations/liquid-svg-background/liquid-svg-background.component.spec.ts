import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidSvgBackgroundComponent } from './liquid-svg-background.component';

describe('LiquidSvgBackgroundComponent', () => {
  let component: LiquidSvgBackgroundComponent;
  let fixture: ComponentFixture<LiquidSvgBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LiquidSvgBackgroundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LiquidSvgBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
