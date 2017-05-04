import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'albumdetails',
    templateUrl: './albumdetails.component.html',
})
export class AlbumDetailsComponent {
    public album: Album;

    constructor(http: Http, route: ActivatedRoute) {
        var id = route.snapshot.params['id'];
        http.get('/api/albums1/' + id).subscribe(result => {
            this.album = result.json();
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