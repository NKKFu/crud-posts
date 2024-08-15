import { Component, Input } from '@angular/core';
import { PostComment } from '../../../../post-comment';
import { CommentService } from '../../../../comment.service';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { octTrash } from '@ng-icons/octicons';
import { ModalComponent } from '../../../../generic-components/modal/modal.component';

@Component({
  selector: 'app-post-comment-exclude-modal',
  standalone: true,
  imports: [
    ModalComponent,
    NgIcon
  ],
  providers: [
    provideIcons({
      octTrash,
    })
  ],
  templateUrl: './post-comment-exclude-modal.component.html',
  styleUrl: './post-comment-exclude-modal.component.css'
})
export class PostCommentExcludeModalComponent {
  @Input({
    required: true
  })
  comment !: PostComment;
  excludeModalIsOpen = false;

  constructor(private commentService: CommentService) { }

  cancelPost(): void {
    this.excludeModalIsOpen = false;
  }

  deletePost(): void {
    this.commentService.deleteComment(this.comment);
    this.excludeModalIsOpen = false;

    // Reload the page to reflect the changes
    window.location.reload();
  }

  openModal(e: Event) {
    e.stopPropagation();
    this.excludeModalIsOpen = true;
  }
}
