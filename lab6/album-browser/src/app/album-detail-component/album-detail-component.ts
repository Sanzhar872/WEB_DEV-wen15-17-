import { Component, OnInit, signal, inject } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../services/album-service';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './album-detail-component.html'
})
export class AlbumDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private albumService = inject(AlbumService);

  album = signal<Album | undefined>(undefined);

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe({
      next: (data) => this.album.set(data),
      error: (err) => console.error(err)
    });
  }

  saveTitle(): void {
    const currentAlbum = this.album();
    if (currentAlbum) {
      this.albumService.updateAlbum(currentAlbum).subscribe(() => {
        alert('Saved!');
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}