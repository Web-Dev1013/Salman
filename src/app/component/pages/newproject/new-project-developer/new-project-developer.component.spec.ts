import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProjectDeveloperComponent } from './new-project-developer.component';

describe('NewProjectDeveloperComponent', () => {
  let component: NewProjectDeveloperComponent;
  let fixture: ComponentFixture<NewProjectDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProjectDeveloperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProjectDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
