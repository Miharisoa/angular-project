import { Post } from '../models/post.model';

export class PostService{

    private posts : Post[];

    constructor(){
        this.posts = [
            new Post("Post 1 ","This is my first post.",0, "00 00 00 00 00"),            
        ]
    }

    addPost(post:Post) {
        this.posts.push(post);
    }

    deletePost(index) {
        this.posts.slice(index,1);
    }

    getAllPosts() {
        return this.posts;
    }
}