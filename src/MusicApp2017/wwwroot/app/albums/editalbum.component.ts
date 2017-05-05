import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'editalbum',
    templateUrl: './editalbum.component.html'

})

export class EditAlbumComponent {

    album: Album;
    artists: Artist[];
    genres: Genre[];
    postResponse: Object;

    constructor(private http: Http, route: ActivatedRoute) {
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
        this.http.post('/api/albums1/' + this.album.albumID, JSON.stringify(this.album), { headers: headers }).subscribe(res => this.postResponse = res.json());
        form.reset();
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