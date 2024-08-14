import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Publication } from './publication';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {
  constructor(private http: HttpClient) { }

  getPosts(): Observable<Publication[]> {
    return this.http.get<Publication[]>(`https://jsonplaceholder.typicode.com/posts`);
  }

  getPostsFromLocalStorage(): Publication[] {
    const publications = localStorage.getItem('publications');
    return publications ? JSON.parse(publications) : [];
  }

  deletePublication(publication: Publication): void {
    this.updatePublication({ ...publication, isDeleted: true });
  }

  updatePublication(publication: Publication): void {
    const previousPublications = this.getPostsFromLocalStorage();
    const publicationIndex = previousPublications.findIndex((p) => p.id === publication.id);
    if (publicationIndex !== -1) {
      // Was previously in the localStorage so we update it
      previousPublications[publicationIndex] = publication;
    } else {
      // Was not previously in the localStorage so we add it
      previousPublications.push(publication);
    }

    localStorage.setItem('publications', JSON.stringify(previousPublications));
  }
}
