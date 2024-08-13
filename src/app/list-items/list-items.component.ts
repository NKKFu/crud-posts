import { Component } from '@angular/core';
import { PublicationService } from '../publication.service';
import { Publication } from '../publication';
import { AsyncPipe, NgFor } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  octChevronUp,
  octChevronDown,
  octCommentDiscussion,
  octShare,
} from '@ng-icons/octicons';

@Component({
  selector: 'app-list-items',
  standalone: true,
  imports: [
    NgFor,
    AsyncPipe,
    NgIconComponent,
  ],
  providers: [provideIcons({
    octChevronUp,
    octChevronDown,
    octCommentDiscussion,
    octShare,
  })],
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.css'
})
export class ListItemsComponent {
  publications!: Publication[];

  constructor(private publicationService: PublicationService) {}

  deletePublication(id: string): void {
    this.publications = this.publications.filter((publication) => publication.id !== id);
  }

  ngOnInit(): void {
    this.publicationService.getPosts().subscribe({
      next: (response) => this.publications = response,
      error: (err) => console.error('Error:', err),
      complete: () => console.log('Data fetched successfully')
    });
  }
}
