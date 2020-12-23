import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthermobiletabletComponent } from './othermobiletablet.component';

describe('OthermobiletabletComponent', () => {
  let component: OthermobiletabletComponent;
  let fixture: ComponentFixture<OthermobiletabletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OthermobiletabletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OthermobiletabletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
