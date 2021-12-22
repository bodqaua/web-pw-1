import {Component, OnInit} from '@angular/core';
import {PostsService} from "../../shared/services/posts.service";
import {IBasicPost} from "../../shared/interfaces/posts";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  public title: string = "";
  public text: string = "";

  constructor(
    private postService: PostsService
  ) {
  }

  ngOnInit(): void {
  }

  public addPost(): void {
    if (!this.title || !this.text) {
      return;
    }

    const post: IBasicPost = {title: this.title, text: this.text};
    this.postService.addPost(post);
    this.clearModel();
  }

  private clearModel(): void {
    this.title = "";
    this.text = "";
  }
}


