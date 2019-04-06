import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {

  confgirationssss :any;
  constructor( private ps:ConfigService) { }

  ngOnInit() {
    this.confgirationssss = this.ps.getfrontContent();
    //console.log(this.confgirationssss)
  }

}
