import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-component',
  templateUrl: './projects-component.component.html',
  styleUrls: ['./projects-component.component.css']
})
export class ProjectsComponentComponent implements OnInit {
  projects = [
    {
      name: 'City Art',
      description: 'City Art is an Academic iOS project that connected Street Artist with users that were interested in this type of art. The application worked in two ways. First if the user wanted to see art in the area, the app would display art near them. Second if the art was not on the application yet the user could upload pictures and the location for other users to find the art. ',
      gitHubURL: 'https://github.com/ametelski/City-Art'
    },
    {
      name: 'Peronsal Website',
      description: 'Built a personal website to showcase and demonstrate technical skills that I have learned and will continue to learn. ',
      gitHubURL: 'https://github.com/ametelski/Personal-Website'
    },
    {
      name: 'Capstone Project',
      description: 'Academic Capstone Project that aimed to replace an existing fee-based software current used at the Tempe library code clubs. My role in the project was to create the frontend of our application utilizing Angular 2+ framework',
      gitHubURL: 'https://github.com/ametelski/Capstone-Project'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
