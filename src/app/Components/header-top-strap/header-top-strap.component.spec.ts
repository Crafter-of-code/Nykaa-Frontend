import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTopStrapComponent } from './header-top-strap.component';

describe('HeaderTopStrapComponent', () => {
  let component: HeaderTopStrapComponent;
  let fixture: ComponentFixture<HeaderTopStrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderTopStrapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderTopStrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
