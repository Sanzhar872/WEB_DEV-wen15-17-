import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Movie } from '../temp';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly someVariable = signal('angular-practice');
  protected readonly movie = new Movie("Inception", "Christopher Nolan", 2010);
}
