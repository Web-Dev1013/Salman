import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonetabletComponent } from './phonetablet.component';

describe('PhonetabletComponent', () => {
  let component: PhonetabletComponent;
  let fixture: ComponentFixture<PhonetabletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhonetabletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonetabletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
