import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyforsaleComponent } from './propertyforsale.component';

describe('PropertyforsaleComponent', () => {
  let component: PropertyforsaleComponent;
  let fixture: ComponentFixture<PropertyforsaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyforsaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyforsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
