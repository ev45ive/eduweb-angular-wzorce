import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsComponent } from './albums.component';
import { AlbumComponent } from './album.component';
import { ListComponent } from './list.component';

const routes: Routes = [
  {
    path: 'albums',
    children: [
      {
        path: '',
        component: AlbumsComponent,
        children:[
          {
            path:'',
            component:ListComponent,
            outlet:'list'
          }
        ]
      },
      {
        path: ':id',
        component: AlbumsComponent,
        children: [
          {
            path: '',
            component: ListComponent,
            outlet: 'list'
          },
          {
            path: '',
            component: AlbumComponent
          },
        ]
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumsRoutingModule { }
