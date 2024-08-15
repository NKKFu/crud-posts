import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostComment } from './post-comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  locallyStoredComments: PostComment[] = [];

  addComment(postId: number, value: string | null): void {
    if (value === null) {
      return;
    }

    const MAX_LENGTH_RANDOM_NUMBER = 999999999;
    const randomId = () => (Math.random() * MAX_LENGTH_RANDOM_NUMBER).toFixed(0);

    const comment: PostComment = {
      postId: postId,
      id: Number(randomId()),
      name: 'Anonymous',
      email: 'Anonymous',
      body: value,
      isDeleted: false,
    };

    localStorage.setItem('comments', JSON.stringify([
      comment,
      ...this.locallyStoredComments,
    ]));
  }

  constructor(private http: HttpClient) { }

  getCommentsFromLocalStorage(postId: string): PostComment[] {
    const comments = localStorage.getItem('comments') || '[]';
    this.locallyStoredComments = JSON.parse(comments);
    return this.locallyStoredComments
      .filter((comment) => comment.postId.toString() === postId)
  }

  getCommentsFromServer(postId: string): Observable<PostComment[]> {
    return this.http.get<PostComment[]>(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
  }

  deleteComment(comment: PostComment): void {
    this.updateComment({ ...comment, isDeleted: true });
  }

  updateComment(comment: PostComment): void {
    const previousComments = this.getCommentsFromLocalStorage(comment.postId.toString());
    const commentIndex = previousComments.findIndex((p) => p.id === comment.id);
    if (commentIndex !== -1) {
      // Was previously in the localStorage so we update it
      previousComments[commentIndex] = comment;
    } else {
      // Was not previously in the localStorage so we add it
      // at the beginning of the array
      previousComments.unshift(comment);
    }
    localStorage.setItem('comments', JSON.stringify(previousComments));
  }
}
