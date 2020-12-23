import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobiletabletComponent } from './mobiletablet.component';

describe('MobiletabletComponent', () => {
  let component: MobiletabletComponent;
  let fixture: ComponentFixture<MobiletabletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobiletabletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobiletabletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
