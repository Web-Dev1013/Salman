import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilephoneComponent } from './mobilephone.component';

describe('MobilephoneComponent', () => {
  let component: MobilephoneComponent;
  let fixture: ComponentFixture<MobilephoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilephoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilephoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
