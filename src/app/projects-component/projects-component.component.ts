import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-component',
  templateUrl: './projects-component.component.html',
  styleUrls: ['./projects-component.component.css']
})
export class ProjectsComponentComponent implements OnInit {
  project = {
    name: 'City Art',
    description: 'ios class project',
    gitHubURL: 'https://github.com/ametelski/City-Art'
  };

  constructor() { }

  ngOnInit() {
  }

}
