import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CgJobHireComponent } from './cg-job-hire.component';

describe('CgJobHireComponent', () => {
  let component: CgJobHireComponent;
  let fixture: ComponentFixture<CgJobHireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CgJobHireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CgJobHireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
