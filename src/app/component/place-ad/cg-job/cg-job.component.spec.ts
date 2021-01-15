import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CgJobComponent } from './cg-job.component';

describe('CgJobComponent', () => {
  let component: CgJobComponent;
  let fixture: ComponentFixture<CgJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CgJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CgJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
