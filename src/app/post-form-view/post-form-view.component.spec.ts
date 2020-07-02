import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostFormViewComponent } from './post-form-view.component';

describe('PostFormViewComponent', () => {
  let component: PostFormViewComponent;
  let fixture: ComponentFixture<PostFormViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostFormViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostFormViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
