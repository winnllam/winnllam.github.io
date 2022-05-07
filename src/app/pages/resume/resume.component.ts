import { Component, OnInit, AfterViewInit } from '@angular/core';
import experience from './json/experience.json';
import skills from './json/skills.json';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
declare var anime: any;

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit, AfterViewInit {
  experience: object;
  skills: object;

  year = '4th';
  cgpa = '3.43';

  iframeHeight: number = 500;

  constructor() {
    this.experience = experience;
    this.skills = skills;
  }

  ngOnInit(): void {
    var iframe = document.getElementById("iframe") as HTMLIFrameElement;
    this.iframeHeight = iframe.contentWindow.document.body.scrollHeight;
    console.log(this.iframeHeight)
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
}
