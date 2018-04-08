import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album } from './models/album';

@Injectable()
export class AlbumsService {

  url = 'http://localhost:3000/albums/'

  constructor(private http:HttpClient) { }

  getAlbums(){
    return this.http.get<Album[]>(this.url)
  }

  getAlbum(id:number){
    return this.http.get<Album>(this.url + id)
  }

  getAlbumPhotos(album_id:number){
    return this.http.get<Album>(this.url + album_id + '/photos')
  }

}
