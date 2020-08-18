import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
declare var anime: any;

import resume from './json/resume.json';
import project from './json/project.json';
import activity from './json/activity.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  innerHeight: number;
  resume: object;
  project: object;
  activity: object;

  position = 'Incoming Visiting Platform Reliability Engineer Co-op @ Manulife';
  //position = 'Computer Science Specialist Student';
  imageNum = Math.floor(Math.random() * 8) + 1;
  slogan =
    'An aspiring 3rd year computer science student with a passion for aesthetics, creation, and technology.';

  constructor() {
    this.resume = resume;
    this.project = project;
    this.activity = activity;
  }

  setTitleHeight() {
    this.innerHeight = window.innerHeight;

    var el = document.getElementById('title');
    el.style.height = this.innerHeight + 'px';
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.setTitleHeight();
  }

  ngOnInit() {
    this.setTitleHeight();

    AOS.init({
      delay: 300,
      duration: 1500,
      once: false,
      anchorPlacement: 'top-bottom',
    });
  }

  ngAfterViewInit(): void {
    // NAME
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

    // POSITION TITLE
    // Wrap every letter in a span
    var textWrapper = document.querySelector('.an-2');
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime.timeline({ loop: false }).add({
      targets: '.an-2 .letter',
      opacity: [0, 1],
      easing: 'easeInOutQuad',
      duration: 500,
      delay: (el, i) => 40 * (i + 1),
    });
  }
}
