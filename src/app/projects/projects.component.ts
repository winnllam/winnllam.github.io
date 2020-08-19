import { Component, OnInit, AfterViewInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
declare var anime: any;

import project from './json/projects.json';
import feature from './json/feature.json';
import tags from './json/tags.json';

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

  clicked = [];

  featured: Array<any>;
  tags: Array<any>;
  projects: Array<any>;

  constructor() {
    this.featured = feature;
    this.tags = tags;
    this.projects = project;
  }

  ngOnInit(): void {}

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

  filter(id: string) {
    if (this.clicked.includes(id)) {
      this.clicked.splice(this.clicked.indexOf(id), 1);
      document.getElementById(id).style.backgroundColor = 'white';
      document.getElementById(id).style.color = 'black';
    } else {
      this.clicked.push(id);
      document.getElementById(id).style.backgroundColor = 'gray';
      document.getElementById(id).style.color = 'white';
    }

    if (id == 'clear' || this.clicked.length === 0) {
      //clear tags
      for (var j = 0; j < this.clicked.length; j++) {
        document.getElementById(this.clicked[j]).style.backgroundColor =
          'white';
        document.getElementById(this.clicked[j]).style.color = 'black';
      }
      this.clicked = [];

      for (var i = 0; i < this.projects.length; i++) {
        this.projects[i].shown = true;
      }
      return;
    }

    // fade what's not needed
    var show = false;
    for (var i = 0; i < this.projects.length; i++) {
      for (var j = 0; j < this.projects[i].tags.length; j++) {
        //if it should be shown
        if (this.clicked.includes(this.projects[i].tags[j])) {
          show = true;
          //go to next project
          break;
        }
      }
      this.projects[i].shown = show ? true : false;
      show = false;
    }
  }
}
