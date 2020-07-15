import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGroupDiscussionComponent } from './add-group-discussion.component';

describe('AddGroupDiscussionComponent', () => {
  let component: AddGroupDiscussionComponent;
  let fixture: ComponentFixture<AddGroupDiscussionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGroupDiscussionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGroupDiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
