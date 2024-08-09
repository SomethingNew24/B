import { Injectable } from '@angular/core';
import { post } from './post.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts:post[] = [];
  private postUpdated = new Subject<post[]>();

  getUpdateListener() {
    return this.postUpdated.asObservable();
  }

  constructor() { }
  addPost(title:string, content:string, dateTime:any) {
    const post: post= {title:title, content:content, datetime: new Date()};
    this.posts.push(post);
    this.postUpdated.next([...this.posts]);
  }
  getAll() {
    return [...this.posts];
  }
}
