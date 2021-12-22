import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PostsService} from "../../shared/services/posts.service";
import {FilterType, IBasicPost} from "../../shared/interfaces/posts";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  @Output("filterValueChange") filterValueChange = new EventEmitter<string>();
  @Output("filterTypeChange") filterTypeChange = new EventEmitter<FilterType>();

  public filterType: FilterType = "title";
  public titleSearching: string = "";
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

  public onChangeSearch(): void {
    this.filterValueChange.emit(this.titleSearching);
  }

  public isFilterActive(type: FilterType): boolean {
    return this.filterType === type;
  }

  public onFilterTypeChange(type: FilterType): void {
    this.filterType = type;
    this.filterTypeChange.emit(type);
  }

  private clearModel(): void {
    this.title = "";
    this.text = "";
  }
}


