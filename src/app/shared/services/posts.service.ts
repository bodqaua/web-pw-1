import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IBasicPost, IPost} from "../interfaces/posts";

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  public posts: IPost[] = [
    {title: "React", text: "JavaScript-библиотека для создания пользовательских интерфейсов", id: 1},
    {
      title: "Angular",
      text: "Angular is an app-design framework and development platform for creating efficient and sophisticated single-page apps.",
      id: 2
    },
    {
      title: "Vue",
      text: "Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces",
      id: 3
    },
    {title: "Node.js", text: "Node.js® — це JavaScript–оточення побудоване на JavaScript–рушієві Chrome V8.", id: 4}
  ]
  private subscription: BehaviorSubject<IPost[]> = new BehaviorSubject<IPost[]>(this.posts);

  constructor() { }

  public getPosts(): BehaviorSubject<IPost[]> {
    return this.subscription;
  }

  public addPost(post: IBasicPost): void {
    const newPost: IPost = {...post,id: 1};
    this.posts = this.posts.map((postEntity) => ({...postEntity, id: postEntity.id + 1}));
    this.posts.push(newPost);
    this.updatePosts();
  }

  public removePostById(id: number) {
    if (!id) {
      return;
    }
    const index = this.posts.findIndex((post) => post.id === id);
    if (index !== -1) {
      this.posts.splice(index, 1);
      this.updatePosts()
    }
  }

  private updatePosts(): void {
    this.subscription.next(this.posts);
  }
}
