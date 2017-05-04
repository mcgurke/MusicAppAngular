"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var albums_component_1 = require("./albums/albums.component");
var albumdetails_component_1 = require("./albums/albumdetails.component");
var navmenu_component_1 = require("./navmenu/navmenu.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, http_1.JsonpModule, forms_1.FormsModule, router_1.RouterModule.forRoot([
                { path: '', redirectTo: 'albums', pathMatch: 'full' },
                { path: 'albumdetails/:id', component: albumdetails_component_1.AlbumDetailsComponent },
                { path: 'albums', component: albums_component_1.AlbumsComponent },
                //{ path : 'addalbum', component: AddAlbumComponent},
                { path: '**', redirectTo: 'albums' }
            ])],
        declarations: [
            app_component_1.AppComponent,
            albums_component_1.AlbumsComponent,
            albumdetails_component_1.AlbumDetailsComponent,
            navmenu_component_1.NavMenuComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map