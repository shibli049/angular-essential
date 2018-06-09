import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MediaItemService } from '../media-item.service';

@Component({
  selector: 'app-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit {

  mediaItems = [];
  medium = '';

  constructor(
    private mediaItemService: MediaItemService,
    private activatedRoute: ActivatedRoute
  ) { }

  onMediaItemDelete(mediaItem) {
    this.mediaItemService.delete(mediaItem).subscribe(() => this.getMediaItems(this.medium));
   }


  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      let medium = params['medium'];
      if (medium.toLowerCase() === 'all') {
        medium = '';
      }
      this.getMediaItems(medium);
    });
  }

  getMediaItems(medium) {
    this.medium = medium;
    this.mediaItemService.get(medium).subscribe(
      mediaItems => this.mediaItems = mediaItems
    );
  }

}
