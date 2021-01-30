import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanditRegistraionComponent } from './pandit-registraion.component';

describe('PanditRegistraionComponent', () => {
  let component: PanditRegistraionComponent;
  let fixture: ComponentFixture<PanditRegistraionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanditRegistraionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanditRegistraionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
