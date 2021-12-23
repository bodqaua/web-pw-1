import { Component, OnInit } from '@angular/core';
import {FilterType, IPost} from "../../shared/interfaces/posts";
import {BehaviorSubject} from "rxjs";
import {PostsService} from "../../shared/services/posts.service";

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {
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
