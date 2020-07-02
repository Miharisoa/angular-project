import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-posts-view',
  templateUrl: './posts-view.component.html',
  styleUrls: ['./posts-view.component.scss']
})
export class PostsViewComponent implements OnInit {

  posts : Post[];
  
  constructor(private postService:PostService) {

  }

  ngOnInit() {
    this.posts = this.postService.getAllPosts();    
  }

}
