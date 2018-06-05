import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFavorite]'
})
export class FavoriteDirective {

  @HostBinding('class.is-favorite') isFavorite = true;

  @HostBinding('class.is-favorite-hovering') isHovering = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.isHovering = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.isHovering = false;
  }

  @HostListener('click') onMouseClick() {
    this.isFavorite = !this.isFavorite;
  }


  @Input() set appFavorite(value) {
    this.isFavorite = value;
  }

  constructor() { }
}
