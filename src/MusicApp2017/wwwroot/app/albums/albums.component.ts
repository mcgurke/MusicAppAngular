import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'albums',
    templateUrl: './albums.component.html',
})
export class AlbumsComponent {
    public albums: Album[];

    constructor(http: Http) {
        http.get('/api/albums1').subscribe(result => {
            this.albums = result.json();

        });
    }
}

interface Album {
    albumID: number;
    title: string;
    artist: Artist;
    genre: Genre;
}

interface Artist {
    name: string;
    bio: string;
}

interface Genre {
    name: string;
}