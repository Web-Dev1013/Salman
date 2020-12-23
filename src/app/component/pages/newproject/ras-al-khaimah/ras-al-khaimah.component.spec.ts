import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RasAlKhaimahComponent } from './ras-al-khaimah.component';

describe('RasAlKhaimahComponent', () => {
  let component: RasAlKhaimahComponent;
  let fixture: ComponentFixture<RasAlKhaimahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RasAlKhaimahComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RasAlKhaimahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
