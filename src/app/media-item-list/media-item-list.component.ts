import { Component, OnInit } from '@angular/core';

import { MediaItemService } from '../media-item.service';

@Component({
  selector: 'app-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit {

  mediaItems = [];
  medium = '';

  constructor(private mediaItemService: MediaItemService) { }

  onMediaItemDelete(mediaItem) {
    this.mediaItemService.delete(mediaItem);
   }


  ngOnInit() {
    this.getMediaItems(this.medium);
  }

  getMediaItems(medium) {
    this.medium = medium;
    this.mediaItemService.get(medium).subscribe(
      mediaItems => this.mediaItems = mediaItems
    );
  }

}
