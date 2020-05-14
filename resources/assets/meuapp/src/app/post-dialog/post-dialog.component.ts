import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Post } from '../post';

@Component({
  selector: 'app-post-dialog',
  templateUrl: './post-dialog.component.html',
  styleUrls: ['./post-dialog.component.css']
})
export class PostDialogComponent implements OnInit {

  private data = {
    post: new Post("","","","","",""),
    archive: null
  }
  constructor(
    public dialogRef: MatDialogRef<PostDialogComponent>
  ) { }

  ngOnInit(): void {
  }

}
