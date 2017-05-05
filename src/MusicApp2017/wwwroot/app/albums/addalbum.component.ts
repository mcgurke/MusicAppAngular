import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';

@Component({
    selector: 'addalbum',
    templateUrl: './addalbum.component.html'

})

export class AddAlbumComponent {
    router: Router;
    model: Album = new Album();
    artists: Artist[];
    genres: Genre[];
    postResponse: Object;

    constructor(private http: Http, private r: Router) {
        this.router = r;
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
        this.http.post('/api/albums1/', JSON.stringify(this.model), { headers: headers }).subscribe(res => this.postResponse = res.json());
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