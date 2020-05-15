import {
  Injectable
} from '@angular/core';
import {
  Post
} from './post';
import {
  HttpClient,
  HttpEvent,
  HttpEventType
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  public posts: Post[] = [];

  constructor(
    private http: HttpClient
  ) {
    this.http.get('/api/').subscribe(
      (posts: any[]) => {
        for (let p of posts) {
          this.posts.push(
            new Post(
              p.name, p.title, p.subtitle, p.email,
              p.message, p.archive, p.id, p.likes
            )
          );
        }
      }
    );
  }

  save(post: Post, file: File) {
    const uploadData = new FormData();
    uploadData.append('name', post.name);
    uploadData.append('email', post.email);
    uploadData.append('title', post.title);
    uploadData.append('subtitle', post.subtitle);
    uploadData.append('message', post.message);
    uploadData.append('archive', file, file.name);

    this.http.post("/api/", uploadData,
      {reportProgress: true, observe:'events'})
      .subscribe((event: any) => {
        if (event.type == HttpEventType.Response) {
          // console.log(event);
          let p: any = event.body;
            this.posts.push(
              new Post(
                p.name, p.title, p.subtitle, p.email,
                p.message, p.archive, p.id, p.likes
              )
            );
          }

        if (event.type == HttpEventType.UploadProgress) {
          console.log('UploadProgress');
          console.log(event);
        }
      })
  }
}
