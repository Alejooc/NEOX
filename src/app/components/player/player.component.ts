import { Component, OnInit } from '@angular/core';
import { faPlay,faStepForward,faStepBackward,faVolumeUp,faRandom,faRedo,faAngleUp,faPlus,faShareAlt,faAngleDown } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  constructor() { }
  faPlay = faPlay;
  faStepForward=faStepForward;
  faStepBackward=faStepBackward;
  faVolumeUp=faVolumeUp;
  faRandom=faRandom;
  faAngleDown=faAngleDown;
  faRedo=faRedo;
  faAngleUp=faAngleUp;
  faPlus=faPlus;
  faShareAlt=faShareAlt;

  ngOnInit(): void {
  }

  
  public showplayermb() {
   
  }
}
