import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { PostService } from './services/post.service';
import { Post } from './models/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{

  postForm: FormGroup;
  submitted = false;
    
  posts : Post[];
  
  constructor(private formBuilder: FormBuilder, private postService:PostService) {

  }

  ngOnInit() {
    this.posts = this.postService.getAllPosts();
    this.initPostForm();
  }

  initPostForm() {
    this.postForm = this.formBuilder.group({
      title:['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      content:['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
      like:['', [Validators.required, Validators.pattern("[0-9]*")]],
      contact:['', [Validators.required, Validators.pattern('([0-9]{2} ){4}[0-9]{2}$')]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+([\.])[a-z]{2,4}$")]],      
    });
  }

  get f() {
    return this.postForm.controls;
  }

  onSubmitForm(formDirective: FormGroupDirective) {
    this.submitted = true;
    if (this.postForm.invalid) return;
    const formValue = this.postForm.value;
    const newPost = new Post(formValue['title'], formValue['content'],formValue['like'], formValue['contact']);
    newPost.email = formValue['email'];
    this.postService.addPost(newPost);           
    this.onReset();
    formDirective.resetForm(); 
  }

  onReset() {
    this.submitted = false;
    this.postForm.reset();
  }

}
