import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProjectDetailListComponent } from './new-project-detail-list.component';

describe('NewProjectDetailListComponent', () => {
  let component: NewProjectDetailListComponent;
  let fixture: ComponentFixture<NewProjectDetailListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProjectDetailListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProjectDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
