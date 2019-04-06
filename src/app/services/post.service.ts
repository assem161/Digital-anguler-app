import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { post } from '../modules/Post';

const httpOptions = {
  headers:new HttpHeaders({'Content-type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postsUrl:string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http:HttpClient) {}

     // method to get posts 
    getPosts() : Observable<post[]> {
      return this.http.get<post[]>(this.postsUrl);
    }

    savePost(post:post) :Observable<post>{
      return this.http.post<post>(this.postsUrl,post,httpOptions);
    }

    updatePost(post:post) :Observable<post>{
      const Url = ` ${this.postsUrl}/${post.id} `;
      return this.http.put<post>(Url , post , httpOptions);
    }

    getThePost(id:number) :Observable<post>{
      const Url = ` ${this.postsUrl}/${id} `;
      return this.http.get<post>(Url);
    }    

    RemovePost(post:post | number) :Observable<post>{
      const id = typeof post === 'number' ? post :post.id;
      const Url = ` ${this.postsUrl}/${id} `;
      return this.http.delete<post>(Url,httpOptions)
    }
}
