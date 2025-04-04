import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottonCarouselComponent } from './botton-carousel.component';

describe('BottonCarouselComponent', () => {
  let component: BottonCarouselComponent;
  let fixture: ComponentFixture<BottonCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottonCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottonCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
