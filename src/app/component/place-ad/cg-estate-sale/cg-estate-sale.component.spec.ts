import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CgEstateSaleComponent } from './cg-estate-sale.component';

describe('CgEstateSaleComponent', () => {
  let component: CgEstateSaleComponent;
  let fixture: ComponentFixture<CgEstateSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CgEstateSaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CgEstateSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
