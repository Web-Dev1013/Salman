import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CgMotorsComponent } from './cg-motors.component';

describe('CgMotorsComponent', () => {
  let component: CgMotorsComponent;
  let fixture: ComponentFixture<CgMotorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CgMotorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CgMotorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
