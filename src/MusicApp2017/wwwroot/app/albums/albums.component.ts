import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'albums',
    templateUrl: './albums.component.html',
})
export class AlbumsComponent {
    public albums: Album[];
    http: Http;

    constructor(http: Http) {
        this.http = http;
        http.get('/api/albums1').subscribe(result => {
            this.albums = result.json();

        });
    }

    search(search: string) {
        alert(search);
        this.http.get('/api/albums1/' + search).subscribe(result => {
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