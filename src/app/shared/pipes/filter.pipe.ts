import {Pipe, PipeTransform} from '@angular/core';
import {FilterType, IPost} from "../interfaces/posts";
import {filter, flatMap, map, Observable, of, tap, toArray} from "rxjs";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(posts: Observable<IPost[]> | undefined, filterValue: string, type: FilterType): Observable<IPost[]> {
    if (!posts) {
      return of([]);
    }
    console.log(type);
    if (!filterValue) {
      return posts;
    }
    return posts.pipe(
      map((data) => data.filter(post =>
        post[type].trim().toLowerCase().includes(filterValue.trim().toLowerCase())))
    );
  }
}
