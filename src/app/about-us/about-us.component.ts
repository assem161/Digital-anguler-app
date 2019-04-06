import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  confgirationssss :any;

  constructor( private ps:ConfigService) { }

  ngOnInit() {
    this.confgirationssss = this.ps.getAboutContent();
    console.log(this.confgirationssss);
  }

}
