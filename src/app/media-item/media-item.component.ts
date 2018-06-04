import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent implements OnInit {

  @Input() mediaItem;

  @Output() delete = new EventEmitter();


  onDelete() {
    this.delete.emit(this.mediaItem);
  }


  constructor() { }

  ngOnInit() {
  }

}
