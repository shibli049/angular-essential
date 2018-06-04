import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstMediaItem =  {
    id: 1,
    name: 'Firebugs',
    medium: 'Series',
    category: 'Sci-Fi',
    year: 2010,
    watchedOn: 1294166565384,
    isFavorite: false
  };

  onMediaItemDelete(mediaItem) {

  }
}
