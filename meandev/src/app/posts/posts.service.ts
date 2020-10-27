import { Subject } from 'rxjs';

export class PostsService{
  private posts =[];
  private postsUpdated = new Subject();

  getPosts()
  {
    return [...this.posts];//array copy
  }

  getPostUpdate()
  {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content:string){
    const post={title:title,content: content};
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
}
