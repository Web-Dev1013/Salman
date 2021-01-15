import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProjectDetailPromotionComponent } from './new-project-detail-promotion.component';

describe('NewProjectDetailPromotionComponent', () => {
  let component: NewProjectDetailPromotionComponent;
  let fixture: ComponentFixture<NewProjectDetailPromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProjectDetailPromotionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProjectDetailPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
