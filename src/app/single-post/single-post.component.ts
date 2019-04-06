import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { post } from '../modules/Post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  post:post;

  constructor(private route: ActivatedRoute,private postService:PostService) { }

  ngOnInit() {
    const id =+this.route.snapshot.paramMap.get('id');
    this.postService.getThePost(id).subscribe(post=>this.post = post)
  }

}
