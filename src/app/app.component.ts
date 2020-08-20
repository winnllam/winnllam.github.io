import { Component, HostListener } from '@angular/core';
import {
  faInstagram,
  faGithub,
  faLinkedin,
  faDribbble,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Winnie Lam';
  email = 'winnieee.lam@mail.utoronto.ca';

  faInstagram = faInstagram;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faDribbble = faDribbble;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    let element = document.querySelector('.nav');
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('nav-inverse');
    } else {
      element.classList.remove('nav-inverse');
    }
  }
}
