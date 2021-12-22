import {Component} from '@angular/core';
import {IPost} from "./shared/interfaces/posts";
import {PostsService} from "./shared/services/posts.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public posts$?: BehaviorSubject<IPost[]>;

  constructor(private postService: PostsService
  ) {
  }

  ngOnInit(): void {
    this.posts$ = this.postService.getPosts();
  }

}
