import { Component, OnInit, signal, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Postservice } from '../../services/post-service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css'
})
export class PostListComponent implements OnInit {
  private postService = inject(Postservice);

  posts = signal<Post[]>([]);
  isLoading = signal(true);

  ngOnInit(): void {
    this.postService.getPosts().subscribe({
      next: (data) => {
        this.posts.set(data.slice(0, 20));
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }
}
