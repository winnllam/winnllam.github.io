import { Component, OnInit } from '@angular/core';
import experience from './json/experience.json';
import skills from './json/skills.json';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent implements OnInit {
  experience: object;
  skills: object;

  year = '3rd';
  cgpa = '3.51';

  constructor() {
    this.experience = experience;
    this.skills = skills;
  }

  ngOnInit(): void {}
}
