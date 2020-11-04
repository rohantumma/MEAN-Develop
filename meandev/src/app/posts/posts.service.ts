import { from, Subject } from 'rxjs';
import { Injectable } from "@angular/core";

import { Router } from "@angular/router";

import { map } from "rxjs/operators";

import { HttpClient } from "@angular/common/http";


import { Post } from "./post.model";

@Injectable({ providedIn: "root" })
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor (private http: HttpClient, private router: Router){}

  getPosts()
  {
    //return [...this.posts];//array copy
    this.http.get<{message: string, posts: any}>('http://localhost:3000/api/posts')
    .pipe(
      map(postData => {
        return postData.posts.map(post => {
          return {
            title: post.title,
            content: post.content,
            _id: post._id
          };
        });
      })
    )
    .subscribe(transformedPosts => {
      this.posts = transformedPosts;
      this.postsUpdated.next([...this.posts]);
    });
  }

  getPostUpdate()
  {
    return this.postsUpdated.asObservable();
  }

// edit single post
  getPost(_id: string){
    console.log("ID:"+_id);
    return this.http.get<{ _id: string; title: string; content: string }>(
      "http://localhost:3000/api/posts/" + _id
    );
  }

  addPost(title: string, content:string){
    const post={_id: null, title:title, content: content};
    this.http
      .post<{ message: string, postId: string }>("http://localhost:3000/api/posts", post)
      .subscribe(responseData => {
        console.log(responseData.message);
        const _id = responseData.postId;
        post._id=_id;
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
        this.router.navigate(["/"]);
      });
  }

  updatePost(_id:string, title: string, content: string){
    const post: Post = { _id: _id, title: title, content: content };
    this.http
      .put("http://localhost:3000/api/posts/" + _id, post)
      .subscribe(response => {
        const updatedPosts = [...this.posts];
        const oldPostIndex = updatedPosts.findIndex(p => p._id === post._id);
        updatedPosts[oldPostIndex] = post;
        this.posts = updatedPosts;
        this.postsUpdated.next([...this.posts]);
        this.router.navigate(["/"]);
      });
    console.log("Update.."); //log delete
  }

  deletePost(postId: string){
    this.http.delete("http://localhost:3000/api/posts/"+postId)
    .subscribe(()=>{
      const updatedPosts = this.posts.filter(post=>post._id !==postId);
      this.posts= updatedPosts;
      this.postsUpdated.next([...this.posts]);
      console.log("DELETED.."); //log delete
    });
  }
}
