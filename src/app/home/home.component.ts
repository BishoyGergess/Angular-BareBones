import { Component, OnInit } from '@angular/core';
import { Service } from '../shared/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content:string;
  copyright:string;
  constructor(private service:Service) { }

  ngOnInit() {
    this.content  = this.service.getContent();
    this.copyright = this.service.getCopyRights();
  }
  url(){
    return this.service.getUrl();
  }

}
