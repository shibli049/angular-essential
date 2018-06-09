import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class MediaItemService {

  constructor(private http: Http) {}

  get(medium) {
    const searchParams = new URLSearchParams();
    searchParams.append('medium', medium);
    return this.http.get('mediaitems', { search: searchParams }).pipe(
      map(response => {
        return response.json().mediaItems;
      })
    );
  }

  add(mediaItem) {
    return this.http.post('mediaitems', mediaItem);
  }

  delete(mediaItem: MediaItem) {
    return this.http.delete(`mediaitems/${mediaItem.id}`);
  }
}

interface MediaItem {
  id: number;
  name: string;
  medium: string;
  category: string;
  year: number;
  watchedOn: number;
  isFavorite: boolean;
}

interface MediaItemResponse {
  mediaItems: MediaItem[];
}
