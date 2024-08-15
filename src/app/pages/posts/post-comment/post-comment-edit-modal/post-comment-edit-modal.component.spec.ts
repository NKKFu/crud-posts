import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCommentEditModalComponent } from './post-comment-edit-modal.component';

describe('PostCommentEditModalComponent', () => {
  let component: PostCommentEditModalComponent;
  let fixture: ComponentFixture<PostCommentEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostCommentEditModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostCommentEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
