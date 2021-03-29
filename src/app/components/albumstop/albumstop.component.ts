import { Component, OnInit } from '@angular/core';
import { faAngleDown,faAngleRight} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-albumstop',
  templateUrl: './albumstop.component.html',
  styleUrls: ['./albumstop.component.scss']
})
export class AlbumstopComponent implements OnInit {

  constructor() { }
  faAngleDown=faAngleDown;
  faAngleRight=faAngleRight;
  ngOnInit(): void {
  }

}
