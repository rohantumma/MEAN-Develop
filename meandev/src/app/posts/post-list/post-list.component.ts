import { Component, Input, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../post.model';


import { PostsService } from '../posts.service';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit {
  // posts = [
  //   { title: 'First Post', content: 'This is 1' },
  //   { title: 'Second Post', content: 'This is 2' },
  //   { title: 'Third Post', content: 'This is 3' },
  // ];
 posts =[];
 private postsSub:Subscription;

 constructor(public postsService: PostsService) {


 }
 ngOnInit()
 {
   this.posts = this.postsService.getPosts();
   this.postsSub= this.postsService.getPostUpdate()
     .subscribe((posts: Post[]) =>{
     this.posts=posts;
   });
 }

 ngOnDestroy()
 {
   this.postsSub.unsubscribe();
 }


}
