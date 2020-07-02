import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-form-view',
  templateUrl: './post-form-view.component.html',
  styleUrls: ['./post-form-view.component.scss']
})
export class PostFormViewComponent implements OnInit {

  postsForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private postService:PostService) { }

  ngOnInit() {
    this.postsForm = this.formBuilder.group({
      items: this.formBuilder.array([this.createItemPostsForm()])
    });
  }

  get f() {
    return this.postsForm.controls;
  }

  createItemPostsForm() {
    return this.formBuilder.group({
      title:['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      content:['', [Validators.required, Validators.minLength(3), Validators.maxLength(500)]],           
    });
  }

  addItemPostsForm(): void {    
    const itemFormArray = <FormArray>this.f.items;
    itemFormArray.push(this.createItemPostsForm());
  }

  get items (){
    return this.postsForm.get('items') as FormArray;
  }

  removeItemPostsForm(index): void{        
    const itemFormArray = <FormArray>this.f.items;
    itemFormArray.removeAt(index);
  }

  onSubmitForm(formDirective: FormGroupDirective) {
    this.submitted = true;
    if (this.postsForm.invalid) {
      console.log('invalid form');
    } else{     
      console.log('validated form');
      const formValue = this.postsForm.value;
      console.log(typeof(formValue));
      console.log(formValue);
      formValue.items.forEach(element => {
        const newPost = new Post(element['title'], element['content']);
        this.postService.addPost(newPost);
      });     
      this.onReset();
    }        
  }

  onReset() {
    this.submitted = false;
    this.postsForm.reset();
  }

}
