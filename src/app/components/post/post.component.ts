import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../shared/interfaces/posts";
import {PostsService} from "../../shared/services/posts.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() public post?: IPost;

  constructor(private postService: PostsService
  ) { }

  ngOnInit(): void {
  }

  public deletePost(): void {
    if (!this.post) {
      return;
    }
    this.postService.removePostById(this.post.id)
  }

}
