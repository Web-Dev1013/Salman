import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyforrentComponent } from './propertyforrent.component';

describe('PropertyforrentComponent', () => {
  let component: PropertyforrentComponent;
  let fixture: ComponentFixture<PropertyforrentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyforrentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyforrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
