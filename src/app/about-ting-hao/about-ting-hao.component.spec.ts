import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTingHaoComponent } from './about-ting-hao.component';

describe('AboutTingHaoComponent', () => {
  let component: AboutTingHaoComponent;
  let fixture: ComponentFixture<AboutTingHaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutTingHaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTingHaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
