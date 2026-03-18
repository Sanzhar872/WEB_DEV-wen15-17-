import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post, Comment } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class Postservice {
  private http = inject(HttpClient);
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  getPosts():Observable<Post[]>{
    return this.http.get<Post[]>('${this.baseUrl}/posts');
  }

  getPost(id:number):Observable<Post>{
    return this.http.get<Post>('${this.baseUrl}/posts/{id}');
  }

  getComments(postId: number): Observable<Comment[]>{
    return this.http.get<Comment[]>('${this.baseUrl}/posts/${postId}/comments');
  }
}
