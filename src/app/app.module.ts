import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';

import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item/media-item.component';
import { MediaItemListComponent } from './media-item-list/media-item-list.component';
import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';
import { MediaItemFormComponent } from './media-item-form/media-item-form.component';
import { MediaItemService } from './media-item.service';
import {  lookupLists, LOOKUP_LISTS } from './providers';
import { MockXHRBackend } from './mock-xhr-backend';
import { routing } from './app.routes';



@NgModule({
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    FavoriteDirective,
    CategoryListPipe,
    MediaItemFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  // to make services available to angular modules
  providers: [
    MediaItemService,
    // made data injectable
    { provide: lookupLists, useValue: LOOKUP_LISTS },
    { provide: XHRBackend, useClass: MockXHRBackend }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
