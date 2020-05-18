import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ObjectUnsubscribedError } from 'rxjs';

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
    this.resume = [
      {
        role: 'Front-End Developer',
        company: 'LIVE Competition',
        duration: 'April 2020 - Present',
      },
      {
        role: 'Developer Co-op',
        company: 'Royal Bank of Canada (RBC)',
        duration: 'January 2020 - April 2020',
      },
      {
        role: 'Computer Science Teaching Assistant',
        company: 'University of Toronto Scarborough',
        duration: 'September 2019 - December 2019',
      },
      {
        role: 'Student',
        company: "Google's Computer Science Summer Institute",
        duration: 'July 2018',
      },
    ];

    this.project = [
      {
        name: 'Streamline',
        oneLiner:
          'an app that makes the process easier for international students',
        bullets: [
          'Won 3rd place for RBC Innovation Challenge in a team with 4 fellow co-ops',
          'Built an application that streamlines the experience for international students coming to Canada with a currency converter widget, step-by-step guide for permits, and map marking and locating',
        ],
      },
      {
        name: 'Chat Bot Box',
        oneLiner: 'a Chat Box with Dialogflow Agents',
        bullets: [
          'Developed a chat box UI to enable users to chat with agents outside of the Dialogflow console',
          'Retrieved responses from Dialogflow API for a complete conversation flow',
        ],
      },
      {
        name: 'Pineapple',
        oneLiner: 'an eCommerce Android Application',
        bullets: [
          'An eCommerce android application using Java, SQLite, and Android Studio',
          'Stores and retrieves purchases and accounts for each user, and displayed the app’s shopping and cart content in a lucid and user-friendly manner',
        ],
      },
    ];

    this.activity = [
      {
        role: 'Student Ambassador (Tour Guide)',
        bullets: [
          'Guided prospective students and parents through campus in groups of 5 or more people for 45-minute tours',
          'Clarified inquiries about campus life and education to assist in making post-secondary decisions',
        ],
      },
      {
        role: 'WiCSM Mentor',
        bullets: [
          'Mentored first year CMS students one-on-one in many different aspects to help students feel a sense of community within the program',
          'Provided resume help, study habits, campus tours, and gave general tips',
        ],
      },
    ];
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
