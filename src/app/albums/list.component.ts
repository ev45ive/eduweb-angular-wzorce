import { Component, OnInit } from '@angular/core';
import { AlbumsService } from './albums.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'list',
  template: `
    <div class="list-group">
      <div class="list-group-item" 
        routerLinkActive="active"
        *ngFor="let album of albums | async">
        <a class="text-dark" [routerLink]="['/albums',album.id]">{{album.title}}</a>
      </div>
    </div>  
    
  `,
  styles: []
})
export class ListComponent implements OnInit {


  albums = this.albumsService.getAlbums()

  selectedId = this.route.data.pipe(
    map(data => data.album.id)
  )

  constructor(private albumsService: AlbumsService,
    private route: ActivatedRoute) { }

  ngOnInit() { }

}
