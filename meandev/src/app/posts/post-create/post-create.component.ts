import { from } from 'rxjs';
import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html'

})
export class PostCreateComponent {

  enterValue = '';

  newPost ='No Content';

  onAddPost(postInput: HTMLTextAreaElement){

    this.newPost= postInput.value;
    // alert('Post added');
  }

}
