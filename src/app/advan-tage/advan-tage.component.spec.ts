import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanTageComponent } from './advan-tage.component';

describe('AdvanTageComponent', () => {
  let component: AdvanTageComponent;
  let fixture: ComponentFixture<AdvanTageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvanTageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanTageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
