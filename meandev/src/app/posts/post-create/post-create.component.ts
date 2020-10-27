import { from } from 'rxjs';
import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls:  ['./post-create.component.css']

})
export class PostCreateComponent {

  enterTitle = "";
  enterContent = "";

  @Output() postCreated = new EventEmitter(); //event


  onAddPost(form: NgForm){
    if (form.invalid){
      return;
    }

  const post={
        title: form.value.title,
        content: form.value.content
      };
      this.postCreated.emit(post);

    }

}
