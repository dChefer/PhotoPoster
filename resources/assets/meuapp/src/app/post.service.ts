import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  public posts: Post[] = [
    new Post("Dalmar", "Poster Dalmar", "Guimaraes", "msg", "email@email.com"),
    new Post("Emily", "Poster Dalmar", "Guimaraes", "msg", "email@email.com"),
    new Post("Sofia", "Poster Dalmar", "Guimaraes", "msg", "email@email.com"),
    new Post("Dalmar Pai", "Poster Dalmar", "Guimaraes", "msg", "email@email.com"),
    new Post("Elizabete", "Poster Dalmar", "Guimaraes", "msg", "email@email.com"),
  ];

  constructor() { }
}
