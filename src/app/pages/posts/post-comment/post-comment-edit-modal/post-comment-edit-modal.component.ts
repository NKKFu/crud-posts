import { Component, Input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { octPencil } from '@ng-icons/octicons';
import { FormControl, ReactiveFormsModule } from '@angular/forms'
import { CommentService } from '../../../../comment.service';
import { PostComment } from '../../../../post-comment';
import { ModalComponent } from "../../../../generic-components/modal/modal.component";


@Component({
  selector: 'app-post-comment-edit-modal',
  standalone: true,
  imports: [
    NgIcon,
    ReactiveFormsModule,
    ModalComponent
  ],
  providers: [
    provideIcons({
      octPencil,
    })
  ],
  templateUrl: './post-comment-edit-modal.component.html',
  styleUrl: './post-comment-edit-modal.component.css'
})
export class PostCommentEditModalComponent {
  editModalIsOpen = false;
  @Input({
    required: true
  }) comment!: PostComment;
  body = new FormControl<string>('');

  openEditModal(event: Event) {
    event.stopPropagation();
    this.editModalIsOpen = true;

    // Set the form values to the current publication values
    this.body.setValue(this.comment.body);
  }

  saveChanges() {
    this.commentService.updateComment({
      ...this.comment,
      body: this.body.value || "",
    });
    this.editModalIsOpen = false;

    // Reload the page to reflect the changes
    window.location.reload();
  }

  constructor(private commentService: CommentService) { }
}
