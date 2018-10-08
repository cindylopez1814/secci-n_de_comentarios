import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-input-comment',
  templateUrl: './input-comment.component.html',
  styleUrls: ['./input-comment.component.css']
})
export class InputCommentComponent implements OnInit {
  post: any = {
    commit: ''
  };

  constructor(private formBuilder: FormBuilder, private dataService: DataService ) { }

  ngOnInit() {
  }

  addNewPost() {
    this.dataService.addPost(this.post);
    this.post.commit = '';
  }
}
