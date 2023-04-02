import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  posts: any[] = [];
  currentPage = 1;
  constructor(private blogService: BlogService) { }
  ngOnInit(): void {
    this.blogService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  nextPage(): void {
    this.currentPage++;
    this.blogService.getPosts(this.currentPage).subscribe(posts => {
      this.posts = posts;
    });
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.blogService.getPosts(this.currentPage).subscribe(posts => {
        this.posts = posts;
      });
    }
  }
}
