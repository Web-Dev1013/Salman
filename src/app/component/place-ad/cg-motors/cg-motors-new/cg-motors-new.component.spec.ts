import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CgMotorsNewComponent } from './cg-motors-new.component';

describe('CgMotorsNewComponent', () => {
  let component: CgMotorsNewComponent;
  let fixture: ComponentFixture<CgMotorsNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CgMotorsNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CgMotorsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
