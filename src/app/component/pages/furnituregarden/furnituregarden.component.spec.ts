import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnituregardenComponent } from './furnituregarden.component';

describe('FurnitureComponent', () => {
  let component: FurnituregardenComponent;
  let fixture: ComponentFixture<FurnituregardenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FurnituregardenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FurnituregardenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
