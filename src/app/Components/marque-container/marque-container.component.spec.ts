import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarqueContainerComponent } from './marque-container.component';

describe('MarqueContainerComponent', () => {
  let component: MarqueContainerComponent;
  let fixture: ComponentFixture<MarqueContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarqueContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarqueContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
