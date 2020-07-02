import { Component, OnInit} from '@angular/core';
import { PostService } from './services/post.service';
import { Post } from './models/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit{
    
  posts : Post[];
  
  constructor(private postService:PostService) {

  }

  ngOnInit() {
    this.posts = this.postService.getAllPosts();    
  }
}
