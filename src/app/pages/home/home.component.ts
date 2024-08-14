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

  private loadPostsFromServer(callback: (publications: Publication[]) => void): void {
    this.publicationService.getPosts().subscribe({
      next: callback,
      error: (err) => console.error('Error:', err),
      complete: () => console.log('Data fetched successfully')
    });
  }

  ngOnInit(): void {
    this.loadPostsFromServer((publicationsFromServer) => {
      const publicationsFromLocalStorage = this.publicationService.getPostsFromLocalStorage();

      this.publications = publicationsFromServer
        .map((publication) => {
          const localPublication = publicationsFromLocalStorage.find((p) => p.id === publication.id) || {};
          return {
            ...publication,
            ...localPublication,
          };
        })
        .filter((publication) => !publication.isDeleted);
    });
  }
}
