import { Component, OnInit, signal } from '@angular/core'; // 1. Добавили signal
import { RouterModule } from '@angular/router';
import { AlbumService } from '../services/album-service';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-album',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './album-component.html',
  styleUrl: './album-component.css'
})
export class AlbumComponent implements OnInit {
  // 2. Используем сигналы вместо обычных переменных
  albums = signal<Album[]>([]); 
  loading = signal(true);

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe({
      next: (data) => {
        this.albums.set(data);   // 3. Устанавливаем данные через .set()
        this.loading.set(false); // 4. Выключаем загрузку
      },
      error: (err) => console.error(err)
    });
  }

  deleteAlbum(id: number, event: Event): void {
    event.stopPropagation();
    this.albumService.deleteAlbum(id).subscribe(() => {
      // 5. Фильтруем массив внутри сигнала
      this.albums.update(prev => prev.filter(a => a.id !== id));
    });
  }
}