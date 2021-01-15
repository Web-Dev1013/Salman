import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CgCarsComponent } from './cg-cars.component';

describe('CgCarsComponent', () => {
  let component: CgCarsComponent;
  let fixture: ComponentFixture<CgCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CgCarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CgCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
