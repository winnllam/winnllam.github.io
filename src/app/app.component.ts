import { Component, HostListener } from '@angular/core';
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Winnie Lam';
  email = 'winnieee.lam@mail.utoronto.ca';

  faInstagram = faInstagram;
  faGithub = faGithub;
  faLinkedin = faLinkedin;

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
