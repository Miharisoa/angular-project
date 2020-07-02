import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PostsViewComponent } from './posts-view/posts-view.component';


const routes: Routes = [
  { path: '', component: PostsViewComponent },
  { path: 'posts', component: PostsViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
