import { Component, OnInit } from '@angular/core';
import { faAngleDown,faAngleRight} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-newsongs',
  templateUrl: './newsongs.component.html',
  styleUrls: ['./newsongs.component.scss']
})
export class NewsongsComponent implements OnInit {

  constructor() { }
  faAngleDown=faAngleDown;
  faAngleRight=faAngleRight;
  ngOnInit(): void {
  }

}
