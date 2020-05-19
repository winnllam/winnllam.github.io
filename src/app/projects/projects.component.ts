import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

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
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  faPlus = faPlus;
  innerWidth: any;

  clicked = [];

  featured: Array<any>;
  tags: Array<any>;
  projects: Array<any>;

  constructor(public breakpointObserver: BreakpointObserver) {
    this.featured = feature;
    this.tags = tags;
    this.projects = project;
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth);
    if (this.innerWidth < 800) {
      console.log('smal');
    }

    this.breakpointObserver
      .observe(['(min-width: 950px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          var el = document.getElementsByClassName(
            'projbox'
          ) as HTMLCollectionOf<HTMLElement>;
          for (var i = 0; i < el.length; i++) {
            el[i].style.width = '900px';
          }
        } else {
          var el = document.getElementsByClassName(
            'projbox'
          ) as HTMLCollectionOf<HTMLElement>;
          for (var i = 0; i < el.length; i++) {
            el[i].style.width = '90%';
          }
        }
      });

    this.breakpointObserver
      .observe(['(min-width: 800px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          var desc = document.getElementsByClassName(
            'card-desc1'
          ) as HTMLCollectionOf<HTMLElement>;
          var img = document.getElementsByClassName(
            'projimg1'
          ) as HTMLCollectionOf<HTMLElement>;
          while (desc[0]) {
            img[0].classList.add('projimg');
            img[0].classList.remove('projimg1');
            desc[0].classList.add('card-desc');
            desc[0].classList.remove('card-desc1');
          }
        } else {
          var desc = document.getElementsByClassName(
            'card-desc'
          ) as HTMLCollectionOf<HTMLElement>;
          var img = document.getElementsByClassName(
            'projimg'
          ) as HTMLCollectionOf<HTMLElement>;
          while (desc[0]) {
            img[0].classList.add('projimg1');
            img[0].classList.remove('projimg');
            desc[0].classList.add('card-desc1');
            desc[0].classList.remove('card-desc');
          }
          console.log('changed');
        }
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
