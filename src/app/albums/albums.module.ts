import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumsComponent } from './albums.component';
import { ListComponent } from './list.component';
import { AlbumComponent } from './album.component';
import { AlbumsService } from './albums.service';

@NgModule({
  imports: [
    CommonModule,
    AlbumsRoutingModule
  ],
  declarations: [AlbumsComponent, ListComponent, AlbumComponent],
  providers: [AlbumsService]
})
export class AlbumsModule { }
