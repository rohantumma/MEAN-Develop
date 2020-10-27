import { from } from 'rxjs';
import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls:  ['./post-create.component.css']

})
export class PostCreateComponent {

  enterValue = '';

  newPost ='';

  onAddPost(){

    this.newPost= this.enterValue;

  }

}
