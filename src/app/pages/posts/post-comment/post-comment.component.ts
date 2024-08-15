import { Component, Input } from '@angular/core';
import { PostComment } from '../../../post-comment';
import { PostCommentEditModalComponent } from "./post-comment-edit-modal/post-comment-edit-modal.component";
import { PostCommentExcludeModalComponent } from "./post-comment-exclude-modal/post-comment-exclude-modal.component";

@Component({
  selector: 'app-post-comment',
  standalone: true,
  imports: [PostCommentEditModalComponent, PostCommentExcludeModalComponent],
  templateUrl: './post-comment.component.html',
  styleUrl: './post-comment.component.css'
})
export class PostCommentComponent {
  @Input({
    required: true,
  }) comment!: PostComment;
}
