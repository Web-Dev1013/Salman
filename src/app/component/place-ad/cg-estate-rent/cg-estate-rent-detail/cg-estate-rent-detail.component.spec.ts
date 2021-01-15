import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CgEstateRentDetailComponent } from './cg-estate-rent-detail.component';

describe('CgEstateRentDetailComponent', () => {
  let component: CgEstateRentDetailComponent;
  let fixture: ComponentFixture<CgEstateRentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CgEstateRentDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CgEstateRentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
