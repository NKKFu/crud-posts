import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Publication } from '../../publication';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { octArrowLeft } from '@ng-icons/octicons';
import { CardPostFooterComponent } from '../home/card-post/card-post-footer/card-post-footer.component';
import { PostComment } from '../../comment';
import { CommentService } from '../../comment.service';
import { NgFor, NgIf } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { PublicationService } from '../../publication.service';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    NgIcon,
    CardPostFooterComponent,
    RouterModule,
    ReactiveFormsModule,
    NgFor,
    NgIf,
  ],
  providers: [
    provideIcons({
      octArrowLeft,
    })
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  constructor(
    private _route: ActivatedRoute,
    private route: Router,
    private commentService: CommentService,
    private publicationService: PublicationService,
  ) { }

  publication!: Publication;
  comments!: PostComment[];
  newComment = new FormControl('', {
    validators: [Validators.minLength(0), Validators.required]
  });

  private loadCommentsFromServer(id: string, callback: (value: PostComment[]) => void): void {
    this.commentService.getCommentsFromServer(id).subscribe({
      next: callback,
      error: (err) => console.error('Error:', err),
      complete: () => console.log('Data fetched successfully')
    });
  }

  private loadPublicationFromServer(id: string, callback: (value: Publication) => void): void {
    this.publicationService.getPublication(id).subscribe({
      next: callback,
      error: ((err) => {
        console.error(err);

        // Verify locally as fallback
        const publication = this.publicationService.getPostsFromLocalStorage()
          .find((publication) => publication.id === id);
        if (publication) {
          return callback(publication);
        }

        this.route.navigate(['/']);
        alert('Publication not found');
      }),
      complete: () => console.log('Data fetched successfully')
    });
  }

  ngOnInit(): void {
    const id = +(this._route.snapshot.paramMap.get('id') || 0);

    this.loadPublicationFromServer(id.toString(), (publication) => {
      this.publication = publication;
    });

    this.loadCommentsFromServer(id.toString(), (comments) => {
      // Load comments from localStorage
      const locallyStoredComments = this.commentService.getCommentsFromLocalStorage(id.toString());
      this.comments = [...comments, ...locallyStoredComments];
    });
  }

  autoGrowTextHeight(_event: any) {
    const event = _event as InputEvent;
    (event.target as any).style.height = "5px";
    (event.target as any).style.height = ((event.target as any).scrollHeight) + "px";
  }

  submitForm() {
    if (this.newComment.invalid) {
      return;
    }

    this.commentService.addComment(Number(this.publication.id), this.newComment.value);
    this.newComment.reset();
    window.location.reload();
  }
}
