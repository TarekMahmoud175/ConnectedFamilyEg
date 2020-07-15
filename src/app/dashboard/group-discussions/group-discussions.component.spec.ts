import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupDiscussionsComponent } from './group-discussions.component';

describe('GroupDiscussionsComponent', () => {
  let component: GroupDiscussionsComponent;
  let fixture: ComponentFixture<GroupDiscussionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupDiscussionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupDiscussionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
