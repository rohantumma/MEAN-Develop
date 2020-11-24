import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostListComponent } from './posts/post-list/post-list.component';

//import { FormComponentExp } from './form/form.component'




const routes: Routes = [
 {path: '', component:PostListComponent},
 {path: 'create', component:PostCreateComponent},
 {path: 'edit/:postId', component: PostCreateComponent}
    // {path: 'form', component: FormComponentExp}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
