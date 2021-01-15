import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CgClassifiedComponent } from './cg-classified.component';

describe('CgClassifiedComponent', () => {
  let component: CgClassifiedComponent;
  let fixture: ComponentFixture<CgClassifiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CgClassifiedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CgClassifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
