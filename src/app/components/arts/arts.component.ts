import { Component, OnInit } from '@angular/core';
import { faAngleDown,faAngleRight} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-arts',
  templateUrl: './arts.component.html',
  styleUrls: ['./arts.component.scss']
})
export class ArtsComponent implements OnInit {

  constructor() { }
  faAngleDown=faAngleDown;
  faAngleRight=faAngleRight;
  ngOnInit(): void {
  }

}
