import { Component, OnInit } from '@angular/core';
import { faBars,faSearch,faMusic,faGlobe } from "@fortawesome/free-solid-svg-icons";
import { ActivatedRoute, ParamMap,Router } from '@angular/router';
import {UiStyleToggleService} from "../../services/ui-style-toggle.service";


@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {
  id:string;
  theme;
  faBars=faBars;
  faSearch=faSearch;
  faMusic=faMusic;
  faGlobe=faGlobe;
  constructor(
    private route: Router,
    private uiStyleToggleService: UiStyleToggleService) { }

  ngOnInit(): void {
    
    this.theme = localStorage.getItem('THEME');
    if (this.theme == 'DARK') {
      this.theme =true;
    }else{
      this.theme=false;
    }
    console.log(this.theme);
    
  }
  toggleTheme() {
    this.uiStyleToggleService.toggle();    
    this.ngOnInit();
  }
 
}
