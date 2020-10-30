import { from, Subject } from 'rxjs';
import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";


import { Post } from "./post.model";

@Injectable({ providedIn: "root" })
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor (private http: HttpClient){}

  getPosts()
  {
    //return [...this.posts];//array copy
    this.http.get<{message: string, posts: Post[]}>('http://localhost:3000/api/posts')
    .subscribe((postData) =>{
     this.posts = postData.posts;
     this.postsUpdated.next([...this.posts]);

    });

  }

  getPostUpdate()
  {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content:string){
    const post={id: null, title:title, content: content};
    this.http
      .post<{ message: string }>("http://localhost:3000/api/posts", post)
      .subscribe(responseData => {
        console.log(responseData.message);
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
      });
  }
}
