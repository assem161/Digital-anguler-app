import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-workslightbox',
  templateUrl: './workslightbox.component.html',
  styleUrls: ['./workslightbox.component.css']
})
export class WorkslightboxComponent implements OnInit {
  confgirationssss :any;

  constructor( private ps:ConfigService) { }

  ngOnInit() {
    this.confgirationssss = this.ps.getWorks();
  }


  getlight(){
    $('.light-box a').option({
      'resizeDuration': 200,
      'wrapAround': false,
    })
  }



}
