import {Component} from '@angular/core';
import {FilterType, IBasicPost, IPost} from "./shared/interfaces/posts";
import {PostsService} from "./shared/services/posts.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public filterValue = "";
  public filterType: FilterType = "title";
  public posts$?: BehaviorSubject<IPost[]>;

  constructor(private postService: PostsService
  ) {
  }

  ngOnInit(): void {
    this.posts$ = this.postService.getPosts();
  }

  public onFilterChange(filter: string): void {
    this.filterValue = filter;
  }

  public onTypeChange(type: FilterType): void {
    this.filterType = type;
  }

}
