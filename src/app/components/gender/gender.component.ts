import { Component, OnInit } from '@angular/core';
import { faAngleDown,faAngleRight} from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.scss']
})
export class GenderComponent implements OnInit {

  constructor() { }
  faAngleDown=faAngleDown;
  faAngleRight=faAngleRight;
  ngOnInit(): void {
  }

}
