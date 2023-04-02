import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private apiBaseUrl = 'https://blog.anybuddyapp.com/wp-json/wp/v2';

  constructor(private http: HttpClient) { }
  
  getPosts(page: number = 1): Observable<any> {
    return this.http.get(`${this.apiBaseUrl}/posts?_embed&page=${page}&per_page=10`);
  }
  
  getPostBySlug(slug: string): Observable<any> {
    return this.http.get(`${this.apiBaseUrl}/posts?_embed&slug=${slug}`);
  }
}
