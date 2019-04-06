import { Component, OnInit,EventEmitter,Output,Input } from '@angular/core';
import { post } from '../../modules/Post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  showpostForm:boolean = false;

  @Output() newPost: EventEmitter<post> = new EventEmitter();
  @Output() updatedPost: EventEmitter<post> = new EventEmitter();
  @Input() currentPost:post;
  @Input() isEdit:boolean;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  addpost(title,body){
    if(!title || !body) {
      alert('there is an error')
    }else{
      this.postService.savePost({title,body} as post).subscribe(
        post=>{
          this.newPost.emit(post);
        }
      )
    }
  }

  updatepost(){
    this.postService.updatePost(this.currentPost).subscribe(
      post=>{
        console.log(post);
        this.isEdit = false;
        this.updatedPost.emit(post);
      } 
    )
  }

}
