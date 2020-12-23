import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharjahComponent } from './sharjah.component';

describe('SharjahComponent', () => {
  let component: SharjahComponent;
  let fixture: ComponentFixture<SharjahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharjahComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharjahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
