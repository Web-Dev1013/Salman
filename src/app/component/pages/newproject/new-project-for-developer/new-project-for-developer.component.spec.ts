import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProjectForDeveloperComponent } from './new-project-for-developer.component';

describe('NewProjectForDeveloperComponent', () => {
  let component: NewProjectForDeveloperComponent;
  let fixture: ComponentFixture<NewProjectForDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProjectForDeveloperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProjectForDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
