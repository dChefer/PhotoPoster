import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Post } from '../post';

@Component({
  selector: 'app-post-dialog',
  templateUrl: './post-dialog.component.html',
  styleUrls: ['./post-dialog.component.css']
})
export class PostDialogComponent implements OnInit {

  public archiveName: string='';
  public data = {
    post: new Post("","","","","",""),
    archive: null
  }
  constructor(
    public dialogRef: MatDialogRef<PostDialogComponent>
  ) { }

  ngOnInit(): void {
  }

  changeFile(event)
  {
    // console.log(event.target.files[0]);
    this.archiveName = event.target.files[0].name;
    this.data.archive = event.target.files[0];
  }

  save()
  {
    this.dialogRef.close(this.data);
  }

  cancel()
  {
    this.dialogRef.close(null)
  }
}
