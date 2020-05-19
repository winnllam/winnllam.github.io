import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

import resume from './json/resume.json';
import project from './json/project.json';
import activity from './json/activity.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  resume: object;
  project: object;
  activity: object;

  title = 'Winnie Lam';
  position = 'Computer Science Specialist Student';
  imageNum = Math.floor(Math.random() * 8) + 1;
  slogan =
    'An aspiring computer science student with a passion for aesthetics, creation and computers.';

  constructor() {
    this.resume = resume;
    this.project = project;
    this.activity = activity;
  }

  ngOnInit() {
    AOS.init({
      delay: 700,
      duration: 2000,
      once: false,
      anchorPlacement: 'top-center',
    });
  }
}
