import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgLightRimComponent } from './bg-light-rim.component';

describe('BgLightRimComponent', () => {
  let component: BgLightRimComponent;
  let fixture: ComponentFixture<BgLightRimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BgLightRimComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BgLightRimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
