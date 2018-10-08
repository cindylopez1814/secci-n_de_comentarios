import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Post {
  commit: string;
  id: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  postCollection: AngularFirestoreCollection<Post>;
  posts$: Observable<Post[]>;
  postDoc: AngularFirestoreDocument<Post>;

  constructor(private afs: AngularFirestore) {
    this.postCollection = afs.collection<Post>('post');
    this.posts$ = this.postCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Post;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  getPost() {
    return this.posts$;
  }

  addPost(post: Post) {
    this.postCollection.add(post);
  }
}
