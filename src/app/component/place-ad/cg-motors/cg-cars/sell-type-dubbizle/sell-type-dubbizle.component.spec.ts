import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellTypeDubbizleComponent } from './sell-type-dubbizle.component';

describe('SellTypeDubbizleComponent', () => {
  let component: SellTypeDubbizleComponent;
  let fixture: ComponentFixture<SellTypeDubbizleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellTypeDubbizleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellTypeDubbizleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
