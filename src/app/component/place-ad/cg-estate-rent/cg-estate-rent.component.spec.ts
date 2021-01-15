import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CgEstateRentComponent } from './cg-estate-rent.component';

describe('CgEstateRentComponent', () => {
  let component: CgEstateRentComponent;
  let fixture: ComponentFixture<CgEstateRentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CgEstateRentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CgEstateRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
