import { Component, OnInit } from '@angular/core';
import { faAngleDown,faAngleRight} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {

  constructor() { }
  faAngleDown=faAngleDown;
  faAngleRight=faAngleRight;
  ngOnInit(): void {
  }

}
