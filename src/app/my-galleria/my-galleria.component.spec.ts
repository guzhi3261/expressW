import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGalleriaComponent } from './my-galleria.component';

describe('MyGalleriaComponent', () => {
  let component: MyGalleriaComponent;
  let fixture: ComponentFixture<MyGalleriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyGalleriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGalleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
