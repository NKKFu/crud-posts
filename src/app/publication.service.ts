import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Publication } from './publication';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {
  constructor(private http: HttpClient) {}
  getPosts(): Observable<Publication[]> {
    return this.http.get<Publication[]>(`https://jsonplaceholder.typicode.com/posts`);
  }

  getPostsFromLocalStorage(): Publication[] {
    const publications = localStorage.getItem('publications');
    return publications ? JSON.parse(publications) : [];
  }

  savePostsToLocalStorage(publications: Publication[]): void {
    localStorage.setItem('publications', JSON.stringify(publications));
  }
}
