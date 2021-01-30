import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavgrahavicharComponent } from './navgrahavichar.component';

describe('NavgrahavicharComponent', () => {
  let component: NavgrahavicharComponent;
  let fixture: ComponentFixture<NavgrahavicharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavgrahavicharComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavgrahavicharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
