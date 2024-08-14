import { Component } from '@angular/core';
import { Publication } from '../../publication';
import { PublicationService } from '../../publication.service';
import { NgFor } from '@angular/common';
import { CardPostComponent } from "./card-post/card-post.component";
import { CardPostHeaderComponent } from "./card-post/card-post-header/card-post-header.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgFor,
    CardPostComponent,
    CardPostHeaderComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  publications: Publication[] = [];

  constructor(private publicationService: PublicationService) { }

  private loadPostsFromServer(): void {
    this.publicationService.getPosts().subscribe({
      next: (response) => {
        this.publications = this.publications.concat(response);
        // Only load posts from local storage if the server request succeeds
        // this.loadPostsFromLocalStorage();
      },
      error: (err) => console.error('Error:', err),
      complete: () => console.log('Data fetched successfully')
    });
  }

  // savePostsToLocalStorage(): void {
  //   this.publicationService.savePostsToLocalStorage(this.publications);
  // }

  // deletePublication(id: string): void {
  //   this.publications = this.publications.filter((publication) => publication.id !== id);
  // }

  ngOnInit(): void {
    this.loadPostsFromServer();
  }
}
