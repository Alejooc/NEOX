import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from "./components/main/main.component";
import { ArtistasComponent } from "./pages/artistas/artistas.component";
import { GenerosComponent } from "./pages/generos/generos.component";
import { MusicComponent } from "./pages/music/music.component";
import { PagenotfoundComponent } from "./pages/pagenotfound/pagenotfound.component";



const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'musica', component: MainComponent},
  { path: 'explore', component:  GenerosComponent },
  { path: 'explore/:param', component: MusicComponent  },
  { path: 'artists', component: ArtistasComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
 
})
export class AppRoutingModule { }
