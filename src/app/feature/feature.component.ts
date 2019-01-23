import { Component, OnInit } from '@angular/core';
import { Service } from '../shared/app.service';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {
  header:string;
  constructor(private service:Service) { }

  ngOnInit() {
    this.header = this.service.getAppName();

  }

}
