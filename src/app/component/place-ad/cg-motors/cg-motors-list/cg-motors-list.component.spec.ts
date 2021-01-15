import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CgMotorsListComponent } from './cg-motors-list.component';

describe('CgMotorsListComponent', () => {
  let component: CgMotorsListComponent;
  let fixture: ComponentFixture<CgMotorsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CgMotorsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CgMotorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
