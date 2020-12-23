import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FujairahComponent } from './fujairah.component';

describe('FujairahComponent', () => {
  let component: FujairahComponent;
  let fixture: ComponentFixture<FujairahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FujairahComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FujairahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
