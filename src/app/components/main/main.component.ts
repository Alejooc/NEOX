import { Component, OnInit } from '@angular/core';
import { faPlay,faStepForward,faStepBackward,faVolumeUp,faRandom,faRedo } from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  
})
export class MainComponent implements OnInit {

  constructor() { }
  popular:boolean;
  topAlbums:boolean;
  gender:boolean;
  artistas:boolean;
  newsongs:boolean;

  ngOnInit(): void {
    this.popular = true;
    this.topAlbums=true;
    this.gender=true;
    this.artistas=true;
    this.newsongs=true;
    console.log(this.popular);
    
  }

}
