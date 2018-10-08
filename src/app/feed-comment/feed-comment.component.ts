import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-feed-comment',
  templateUrl: './feed-comment.component.html',
  styleUrls: ['./feed-comment.component.css']
})
export class FeedCommentComponent implements OnInit {
  post: any;

  constructor(private dataservice: DataService) {
    this.dataservice.getPost().subscribe(post => {
      this.post = post;
      console.log(this.post);
    });
  }

  ngOnInit() {
  }

  remove(item) {
    this.dataservice.postCollection.ref.doc(item.id).delete();
  }

}
