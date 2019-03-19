import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentListsComponent } from './comment-lists.component';

describe('CommentListsComponent', () => {
  let component: CommentListsComponent;
  let fixture: ComponentFixture<CommentListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
