import { Component, OnInit, AfterViewInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
declare var anime: any;

import project from './json/projects.json';
import feature from './json/feature.json';

@Component({
  selector: 'app-projects',
  animations: [
    trigger('InsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('350ms', style({ opacity: 0 }))]),
    ]),
  ],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  faPlus = faPlus;
  innerWidth: any;

  featured: Array<any>;
  projects: Array<any>;
  display: Array<any> = [];

  filter = [
    {
      key: 'Web Dev',
      match: ['Angular', 'React', 'JavaScript'],
    },
    {
      key: 'Mobile',
      match: ['Android Studio'],
    },
    {
      key: 'Database',
      match: ['SQLite', 'MongoDB'],
    },
    {
      key: 'Python',
      match: ['Python', 'Django', 'Tornado', 'Flask'],
    },
    {
      key: 'Java',
      match: ['Java'],
    },
    {
      key: 'Hackathon',
      match: ['Hackathon'],
    },
    {
      key: 'Award',
      match: ['winner'],
    },
    {
      key: 'Clear',
      match: [],
    },
  ];

  tagDict = new Map([
    ['Angular', 'is-primary'],
    ['React', 'is-primary'],
    ['JavaScript', 'is-primary'],
    ['Django', 'is-success is-light'],
    ['Tornado', 'is-success is-light'],
    ['Flask', 'is-success is-light'],
    ['Python', 'is-success'],
    ['Ruby', 'is-danger'],
    ['Rails', 'is-danger is-light'],
    ['Java', 'is-info'],
    ['Android Studio', 'is-info is-light'],
    ['Docker', 'is-link is-light'],
    ['SQLite', 'is-link'],
    ['MongoDB', 'is-link'],
    ['winner', 'is-warning'],
    ['Hackathon', 'is-warning'],
    ['course', 'is-white'],
    ['solo', 'is-white'],
    ['team', 'is-white'],
  ]);

  constructor() {
    this.featured = feature;
    this.projects = project;
  }

  ngOnInit(): void {
    AOS.init({
      delay: 300,
      duration: 1500,
      once: true,
      anchorPlacement: 'top-bottom',
    });
  }

  ngAfterViewInit(): void {
    // Wrap every letter in a span
    var textWrapper = document.querySelector('.ml1 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime
      .timeline({ loop: false })
      .add({
        targets: '.ml1 .letter',
        scale: [0.3, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: 'easeOutExpo',
        duration: 600,
        delay: (el, i) => 70 * (i + 1),
      })
      .add({
        targets: '.ml1 .line',
        scaleX: [0, 1],
        opacity: [0.5, 1],
        easing: 'easeOutExpo',
        duration: 700,
        offset: '-=875',
        delay: (el, i, l) => 80 * (l - i),
      });
  }

  filter_projects(matches) {
    this.display = matches;
  }

  checkTags(project_tags) {
    if (this.display.length == 0) {
      return true;
    }
    return project_tags.some((item) => this.display.includes(item));
  }
}
