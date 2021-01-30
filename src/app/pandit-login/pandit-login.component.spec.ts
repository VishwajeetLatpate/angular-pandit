import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanditLoginComponent } from './pandit-login.component';

describe('PanditLoginComponent', () => {
  let component: PanditLoginComponent;
  let fixture: ComponentFixture<PanditLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanditLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanditLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
