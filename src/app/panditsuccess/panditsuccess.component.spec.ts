import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanditsuccessComponent } from './panditsuccess.component';

describe('PanditsuccessComponent', () => {
  let component: PanditsuccessComponent;
  let fixture: ComponentFixture<PanditsuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanditsuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanditsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
