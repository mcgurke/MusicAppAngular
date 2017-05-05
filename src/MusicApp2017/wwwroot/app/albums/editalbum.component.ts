import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router';

@Component({
    selector: 'editalbum',
    templateUrl: './editalbum.component.html'

})

export class EditAlbumComponent {
    router: Router;
    album: Album;
    artists: Artist[];
    genres: Genre[];
    postResponse: Object;

    constructor(private http: Http, route: ActivatedRoute, private r: Router) {
        this.router = r;
        var id = route.snapshot.params['id'];
        this.http = http;
        http.get('/api/albums1/' + id).subscribe(result => {
            this.album = result.json();
        });
        http.get('/api/artists1').subscribe(result => {
            this.artists = result.json();

        });
        http.get('/api/genres1').subscribe(result => {
            this.genres = result.json();

        });
    }

    onSubmit(form: NgForm) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.put('/api/albums1/' + this.album.albumID, JSON.stringify(this.album), { headers: headers }).subscribe(res => this.postResponse = res.json());
        this.router.navigate(['./albums']);
    }
}

class Album {
    albumID: number;
    title: string;
    artist: Artist;
    genre: Genre;
}

interface Artist {
    artistID: number;
    name: string;
    bio: string;
}

interface Genre {
    genreID: number;
    name: string;
}