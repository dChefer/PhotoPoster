import { Component } from '@angular/core';
import { Post } from './post';
import { MatDialog } from '@angular/material/dialog';
import { PostDialogComponent } from './post-dialog/post-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meuapp';
  public posts: Post[] = [
    new Post("Dalmar", "Poster Dalmar", "Guimaraes", "msg", "email@email.com"),
    new Post("Emily", "Poster Dalmar", "Guimaraes", "msg", "email@email.com"),
    new Post("Sofia", "Poster Dalmar", "Guimaraes", "msg", "email@email.com"),
    new Post("Dalmar Pai", "Poster Dalmar", "Guimaraes", "msg", "email@email.com"),
    new Post("Elizabete", "Poster Dalmar", "Guimaraes", "msg", "email@email.com"),
  ];

  constructor(public dialog: MatDialog){}
  openDialog(){
    const dialogRef = this.dialog.open(PostDialogComponent,{
      width:'600px'
    });
  }
}
