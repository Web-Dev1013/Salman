import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellTypeYourselfComponent } from './sell-type-yourself.component';

describe('SellTypeYourselfComponent', () => {
  let component: SellTypeYourselfComponent;
  let fixture: ComponentFixture<SellTypeYourselfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellTypeYourselfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellTypeYourselfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
