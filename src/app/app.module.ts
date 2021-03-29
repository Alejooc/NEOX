import { APP_INITIALIZER,NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeadComponent } from './components/head/head.component';
import { PlayerComponent } from './components/player/player.component';
import { PopularComponent } from './components/popular/popular.component';
import { AlbumstopComponent } from './components/albumstop/albumstop.component';
import { ArtsComponent } from './components/arts/arts.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { GenderComponent } from './components/gender/gender.component';
import { NewsongsComponent } from './components/newsongs/newsongs.component';
import { ExploreComponent } from './components/explore/explore.component';
import { ArtistasComponent } from './pages/artistas/artistas.component';
import { GenerosComponent } from './pages/generos/generos.component';
import { MusicComponent } from './pages/music/music.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import {UiStyleToggleService} from "./services/ui-style-toggle.service";
import {StorageService} from "./services/local-storage.service";

export function themeFactory(themeService: UiStyleToggleService) {
  return () => themeService.setThemeOnStart();
}

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeadComponent,
    PlayerComponent,
    PopularComponent,
    AlbumstopComponent,
    ArtsComponent,
    CategoriesComponent,
    GenderComponent,
    NewsongsComponent,
    ExploreComponent,
    ArtistasComponent,
    GenerosComponent,
    MusicComponent,
    PagenotfoundComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    RouterModule
  ],
  providers: [
    UiStyleToggleService,
    StorageService,
    {provide: APP_INITIALIZER, useFactory: themeFactory, deps: [UiStyleToggleService], multi: true},
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
