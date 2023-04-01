import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  posts: any[] = [];
  constructor(private blogService: BlogService) { }
  ngOnInit(): void {
    this.blogService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
}
