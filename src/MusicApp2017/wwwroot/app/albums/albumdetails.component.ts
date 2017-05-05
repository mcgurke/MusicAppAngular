import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
    selector: 'albumdetails',
    templateUrl: './albumdetails.component.html',
})
export class AlbumDetailsComponent {
    public album: Album;
    http: Http;
    router: Router;

    constructor(http: Http, route: ActivatedRoute, private r: Router) {
        this.http = http;
        this.router = r;
        var id = route.snapshot.params['id'];
        http.get('/api/albums1/' + id).subscribe(result => {
            this.album = result.json();
        });
    }
    

    delete(albumID: number) {
        alert(albumID);
        this.http.delete('/api/albums1/' + albumID).subscribe((res) => {});
        this.router.navigate(['./albums']);
    }
    edit(albumID: number) {
        this.router.navigate(['./editalbum/' + albumID]);
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