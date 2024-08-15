import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCommentExcludeModalComponent } from './post-comment-exclude-modal.component';

describe('PostCommentExcludeModalComponent', () => {
  let component: PostCommentExcludeModalComponent;
  let fixture: ComponentFixture<PostCommentExcludeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostCommentExcludeModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostCommentExcludeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
