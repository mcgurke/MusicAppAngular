import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailsComponent } from './albums/albumdetails.component';
import { AddAlbumComponent } from './albums/addalbum.component';
import { EditAlbumComponent } from './albums/editalbum.component';

@NgModule({
    imports: [BrowserModule, HttpModule, JsonpModule, FormsModule, RouterModule.forRoot([
        { path: '', redirectTo: 'albums', pathMatch: 'full' },
        { path: 'albumdetails/:id', component: AlbumDetailsComponent },
        { path: 'albums', component: AlbumsComponent },
        { path: 'addalbum', component: AddAlbumComponent },
        { path: 'editalbum/:id', component: EditAlbumComponent },
        { path: '**', redirectTo: 'albums' }

    ]) ],
  declarations: [
      AppComponent,
      AlbumsComponent,
      AlbumDetailsComponent,
      AddAlbumComponent,
      EditAlbumComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
