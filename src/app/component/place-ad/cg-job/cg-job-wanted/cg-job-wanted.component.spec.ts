import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CgJobWantedComponent } from './cg-job-wanted.component';

describe('CgJobWantedComponent', () => {
  let component: CgJobWantedComponent;
  let fixture: ComponentFixture<CgJobWantedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CgJobWantedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CgJobWantedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
