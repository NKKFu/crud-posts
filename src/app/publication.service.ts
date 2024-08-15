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

  getPublication(id: string): Observable<Publication> {
    return this.http.get<Publication>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }

  getPostsFromLocalStorage(): Publication[] {
    const publications = localStorage.getItem('publications');
    return publications ? JSON.parse(publications) : [];
  }

  deletePublication(publication: Publication): void {
    this.updatePublication({ ...publication, isDeleted: true });
  }

  addPublication(publication: Publication) {
    const MAX_LENGTH_RANDOM_NUMBER = 999999999;
    const randomId = () => (Math.random() * MAX_LENGTH_RANDOM_NUMBER).toFixed(0).toString();

    const metadata = {
      id: randomId(),
      userId: randomId(),
    }
    this.updatePublication({
      ...metadata,
      ...publication,
    } as Publication);
  }

  updatePublication(publication: Publication): void {
    const previousPublications = this.getPostsFromLocalStorage();
    const publicationIndex = previousPublications.findIndex((p) => p.id === publication.id);
    if (publicationIndex !== -1) {
      // Was previously in the localStorage so we update it
      previousPublications[publicationIndex] = publication;
    } else {
      // Was not previously in the localStorage so we add it
      // at the beginning of the array
      previousPublications.unshift(publication);
    }

    localStorage.setItem('publications', JSON.stringify(previousPublications));
  }
}
