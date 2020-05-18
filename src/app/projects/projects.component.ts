import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

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

  clicked = [];

  featured: Array<any>;
  tags: Array<any>;
  projects: Array<any>;

  constructor() {
    this.featured = [
      {
        id: 'chatbotbox',
        title: 'Chat Bot Box',
        oneLiner: 'A chat box UI for a Dialogflow agent.',
        link: [
          {
            site: 'Github',
            url: 'https://github.com/winnllam/chatbotbox',
          },
        ],
      },
      {
        id: 'just-peachy',
        title: 'Just-Peachy',
        oneLiner:
          'A website gallery to display different page designs with multi-purposes.',
        link: [
          {
            site: 'Website',
            url: 'https://winnllam.github.io/just-peachy',
          },
          {
            site: 'Github',
            url: 'https://github.com/winnllam/chatbotbox',
          },
        ],
      },
      {
        id: 'pineapple',
        title: 'Pineapple',
        oneLiner: 'An eCommerce mobile android application selling pineapples.',
        link: [
          {
            site: 'Github',
            url: 'https://github.com/winnllam/pineapple',
          },
        ],
      },
    ];

    this.tags = [
      {
        category: 'Language',
        tags: [
          {
            id: 'java',
            tag: 'Java',
          },
          {
            id: 'htmlcss',
            tag: 'HTML/CSS',
          },
          {
            id: 'js',
            tag: 'JavaScript',
          },
          {
            id: 'ts',
            tag: 'TypeScript',
          },
          {
            id: 'ruby',
            tag: 'Ruby',
          },
        ],
      },
      {
        category: 'Type',
        tags: [
          {
            id: 'android',
            tag: 'Android App',
          },
          {
            id: 'webapp',
            tag: 'Web App',
          },
          {
            id: 'website',
            tag: 'Website',
          },
        ],
      },
      {
        category: 'Framework',
        tags: [
          {
            id: 'react',
            tag: 'React',
          },
          {
            id: 'androidsdk',
            tag: 'Android SDK',
          },
          {
            id: 'rails',
            tag: 'Ruby on Rails',
          },
        ],
      },
    ];

    this.projects = [
      {
        shown: true,
        tags: ['webapp', 'ts', 'js', 'htmlcss', 'react'],
        number: 7,
        images: ['streamline1', 'streamline2', 'streamline3'],
        title: 'RBC Innovation Challenge (3rd place)',
        name: 'Streamline',
        status: 'Inactive',
        duration: 'April 2020',
        oneLiner:
          'An app to navigate finances, local deals, and streamline banking in a new country.',
        tech: 'React, JavaScript, TypeScript',
        desc: [
          'Within two weeks during work days, my team of 4 created a web application that helps international students engage and buildbetter meaningful relationships during their time in Canada.',
          'Main features included: guide on how to apply for student permit, currency converter, connect students to financial advisor around their campus',
          'My task in the team was to create the currency converter and a dashboard that links to all three main features for a smooth navigation and usage.',
        ],
        resources: [
          {
            title: 'Exchange Rates API',
            link: 'https://exchangeratesapi.io',
          },
          {
            title: 'Mapbox',
            link: 'https://www.mapbox.com',
          },
        ],
        url: '',
      },
      {
        shown: true,
        tags: ['ts', 'js', 'htmlcss', 'react', 'webapp'],
        number: 6,
        images: ['wireframe'],
        title: 'Dialogflow Chat Box UI',
        name: 'Chat Bot Box',
        status: 'Active',
        duration: 'March - April 2020',
        oneLiner: 'A chat box UI for a Dialogflow agent.',
        tech: 'React, TypeScript, JavaScript, Dialogflow',
        desc: [
          'Developed a chat box UI to enable users to chat with agents outside of the Dialogflow console.',
          'Presently trying to figure out how to deploy so the server side works.',
        ],
        resources: [],
        url: 'https://github.com/winnllam/chatbotbox',
      },
      {
        shown: true,
        tags: ['java', 'android', 'androidsdk'],
        number: 5,
        images: ['pa1', 'pa2', 'pa3'],
        title: 'eCommerce Android App',
        name: 'Pineapple',
        status: 'Inactive',
        duration: 'Nov - Dec 2019',
        oneLiner: 'An eCommerce mobile android application selling pineapples.',
        tech: 'Java, SQLite, XML, Android Studio, SVN',
        desc: [
          'In the second year software design course, the final project created was an eCommerce Android application, using SQLite as the relational database. After spending a 3 weeks building Java code to run a sales application in console, we had a week to implement the code and functionality into an Android application. The implementations follow SOLID design and MVC.',
          "The project's features include for Admin, Employee, and Customer. Admins can view details about sales and customers, as well as serialize and deserialize the database. Employees can create a customer and restock inventory. Customers can shop for items and check out. We also had interfaces for the shopping cart and the employee for their functionality. All the information is stored in the database.",
          'My main duty of the group was to merge the code to ensure it still works, and the employee pages of the Android application. I had to take in user input, and either add the information to the database or cross-check to ensure the entered information is correct. I also had to display relevant information back to the employee and user.',
          'This management of this project followed the Scrum implementation of Agile of the SDLC. As scrum master, I managed and organized a team of 4, with the team following a Main/Feature branching strategy and using SVN as code management.',
        ],
        resources: [],
        url: 'https://github.com/winnllam/Pineapple',
      },
      {
        shown: true,
        tags: ['htmlcss', 'ruby', 'rails', 'webapp'],
        number: 4,
        images: ['fc1', 'fc2', 'fc3', 'fc4', 'fc5'],
        title: 'Evernote Replica',
        name: 'FileCabinet',
        status: 'Inactive',
        duration: 'Sept 2019',
        oneLiner: 'A minimalist-themed Evernote replica web application.',
        tech: 'Ruby on Rails, Ruby, HTML/CSS, Heroku, Gems',
        desc: [
          'Hosted on Heroku, I created a minimalist-themed web application that stores documents and notes, similar to Evernote. Using Rails web framework and HAML syntax to embed Ruby code, I was able to implement the main function of file storage and manipulation.',
          'Using gems to add functionality, I was also able to implement user logins (using Devise) and adding files (Simple Form).',
          'Signing up and logging in will enable users to then create their own notes and also be able to look at all the notes they have created. There are editing and delete options on the notes in the case they wish to make changes. There is no way to access notes that others users have created.',
        ],
        resources: [
          {
            title: 'Udemy',
            link:
              'https://www.udemy.com/course/8-beautiful-ruby-on-rails-apps-in-30-days/',
          },
          {
            title: 'Heroku',
            link: 'https://www.heroku.com',
          },
        ],
        url: 'https://filing-cab.herokuapp.com',
      },
      {
        shown: true,
        tags: ['htmlcss', 'js', 'website'],
        number: 3,
        images: ['jp1', 'jp2'],
        title: 'Web Page Designs',
        name: 'Just-Peachy',
        status: 'Active',
        duration: 'Dec 2018 - Present',
        oneLiner:
          'A website gallery to display different page designs with multi-purposes.',
        tech: 'HTML, CSS, JavaScript',
        desc: [
          "Displays web design and development skills to be able to attain the right aesthetics and correct function of a page's theme.",
          'Designs and selected images personally created.',
        ],
        resources: [],
        url: 'https://winnllam.github.io/just-peachy',
      },
      {
        shown: true,
        tags: ['htmlcss', 'js', 'website'],
        number: 2,
        images: ['wireframe'],
        title: 'Website Creation',
        name: 'Winnllam',
        status: 'Active',
        duration: 'Sept 2018 - Present',
        oneLiner: 'A personal profile website.',
        tech: 'HTML, CSS, JavaScript',
        desc: [
          "You're looking at it right now! This website was made from stratch by yours truly, to display all the things I have created or accomplished. This is a chance to show my competence in simple web creation and development.",
        ],
        resources: [
          {
            title: 'Send email with no server',
            link:
              'https://github.com/dwyl/learn-to-send-email-via-google-script-html-no-server',
          },
          {
            title: 'Bootstrap',
            link: 'https://getbootstrap.com/',
          },
        ],
        url: '',
      },
      {
        shown: true,
        tags: ['htmlcss', 'js', 'py', 'webapp'],
        number: 1,
        images: ['qp1', 'qp2', 'qp3'],
        title: 'Student Connecter',
        name: 'Quad-Plus',
        status: 'Inactive',
        duration: 'July 2018',
        oneLiner:
          'A web application that connects and display student locations from (mutual) high school to (mutual) post secondary.',
        tech: 'HTML, CSS, Python, JavaScript, Google App Engine',
        desc: [
          "Quad-Plus was created as a final project during my time with Google's Computer Science Summer Institute (CSSI). Partnered up with two others from the 30 students there, we created a web application that connects high school to university/college.",
          "Taking in the users information, a line is drawn on the map, connecting where they went to high school to where they'll be going to university/college. They would also be able to see other users lines on the map.",
          'Logging in would enable the user to see lists of other users who went to the same high school and people going to the same university/college.',
          'My role in this was to store the user information on the web and retrieve it back out for displays per specific user. This included login information, names of the institutions, and location (latitude and longitude).',
        ],
        resources: [
          {
            title: 'Google Maps API',
            link:
              'https://developers.google.com/maps/documentation/javascript/tutorial',
          },
          {
            title: 'Simple Polylines',
            link:
              'https://developers.google.com/maps/documentation/javascript/examples/polyline-simple',
          },
        ],
        url: 'https://quad-plus.appspot.com',
      },
      {
        shown: true,
        tags: ['java'],
        number: 0,
        images: ['cs1', 'cs2'],
        title: 'Airplane Shooter Game',
        name: 'Copyright Strike',
        status: 'Inactive',
        duration: 'April - June 2018',
        oneLiner: 'A cartoon-looking airplane shooter game.',
        tech: 'Java',
        desc: [
          'Copyright Strike was created as a final project in my grade 12 computer science course. Partnered up with two other classmates in the class, we created an airplaine shooter game to fit the requirements outlined by the rubric.',
          'In this game, the user controls the airplane at the bottom of the screen using the arrow keys, and proceeds to try to shoot down all incoming enemies and bosses. It tracks lives, bombs, current score, and high score throughout the duration of the game.',
          'Using polymorphism and inheritance, we were able to create game objects effectively and efficently without repetition of code.',
          'My role in this was to create and enchance the graphics, thus improving user experience. This included the scrolling background, graphics of the title screen, movement of objects, and updating the items that need to be kept tracked of as mentioned above.',
          'This project resulted in an A grade, worth 30% of the total mark.',
        ],
        resources: [],
        url: 'https://github.com/winnllam/CopyrightStrike',
      },
    ];
  }

  ngOnInit(): void {}

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
