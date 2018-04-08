import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsComponent } from './albums.component';
import { AlbumComponent } from './album.component';

const routes: Routes = [
  {
    path:'albums',
    component: AlbumsComponent,
    children:[
      {
        path:'',
        component: AlbumComponent
      },
      {
        path:':id',
        component: AlbumComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumsRoutingModule { }
