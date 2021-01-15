import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CgCommunityComponent } from './cg-community.component';

describe('CgCommunityComponent', () => {
  let component: CgCommunityComponent;
  let fixture: ComponentFixture<CgCommunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CgCommunityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CgCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
