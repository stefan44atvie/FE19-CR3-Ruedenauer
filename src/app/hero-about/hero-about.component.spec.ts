import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroAboutComponent } from './hero-about.component';

describe('HeroAboutComponent', () => {
  let component: HeroAboutComponent;
  let fixture: ComponentFixture<HeroAboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroAboutComponent]
    });
    fixture = TestBed.createComponent(HeroAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
