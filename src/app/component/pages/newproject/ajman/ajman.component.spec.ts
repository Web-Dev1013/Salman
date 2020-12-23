import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjmanComponent } from './ajman.component';

describe('AjmanComponent', () => {
  let component: AjmanComponent;
  let fixture: ComponentFixture<AjmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjmanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
