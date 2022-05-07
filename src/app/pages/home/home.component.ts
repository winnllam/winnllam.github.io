import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
declare var anime: any;

import highlights from './json/highlights.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  innerHeight: number;
  arrowsOutside = true;
  highlights: any[];

  position = 'SDE @ Amazon 🧩 CS TA';
  //position = 'Computer Science Specialist Student';
  imageNum = Math.floor(Math.random() * 8) + 1;
  slogan =
    'An aspiring 4th year computer science student with a passion for aesthetics, creation, and technology.';

  images = [
    { path: 'assets/photography/1.jpg' },
    { path: 'assets/photography/2.jpg' },
    { path: 'assets/photography/3.jpg' },
    { path: 'assets/photography/4.jpg' },
    { path: 'assets/photography/5.jpg' },
  ];

  constructor() {
    this.highlights = highlights;
  }

  setTitleHeight() {
    var el = document.getElementById('title');
    el.style.height = this.innerHeight + 'px';
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerHeight = window.innerHeight;
    this.setTitleHeight();

    this.arrowsOutside = window.innerWidth < 925 ? false : true;
  }

  ngOnInit() {
    this.onResize();

    AOS.init({
      delay: 300,
      duration: 1500,
      once: true,
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
