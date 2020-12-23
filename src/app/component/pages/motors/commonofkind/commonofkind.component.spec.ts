import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonofkindComponent } from './commonofkind.component';

describe('CommonofkindComponent', () => {
  let component: CommonofkindComponent;
  let fixture: ComponentFixture<CommonofkindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonofkindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonofkindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
