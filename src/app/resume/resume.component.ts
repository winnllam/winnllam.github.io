import { Component, OnInit } from '@angular/core';

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
    this.experience = [
      {
        role: 'Front-End Developer',
        company: 'LIVE Competition',
        duration: 'April 2020 - Present',
        details: [
          "Joined LIVE's Executive Team as a part of the Engineering Section",
          'Working on enhancing the business competition portal, Blueboard, to extend intuitive and user-friendly interfaces',
        ],
      },
      {
        role: 'Developer Co-op',
        company: 'RBC Royal Bank',
        duration: 'January 2020 - April 2020',
        details: [
          "RBC Innovation Team, as apart of the Emerging Technology Lab's development team",
          'Achieved higher level in skills in using JavaScript, TypeScript, Dialogflow, React, Vue.js, Elasticsearch and Kibana',
          'Created diagnostic UI and feedback UI for a Dialogflow chat bot to collect real time user feedback for future consumption',
          'Adapted InnerSource code to utilize a dashboard to display collected conversations in real time through Elasticsearch',
          'Assisted in developing broker services using RabbitMQ and Redis',
        ],
      },
      {
        role: 'Computer Science Teaching Assistant',
        company: 'University of Toronto  Scarborough',
        duration: 'September 2019 - December 2019',
        details: [
          'Clarified student questions about first year computer science and  Python concepts',
          'Distributed handouts in a lecture size of 150',
          'Attended weekly meetings with the teaching team to keep consistency',
          'Hosted office hours for students to seek one-on-one help outside of class',
        ],
      },
      {
        role: 'Student',
        company: "Google's Computer Science Summer Institute",
        duration: 'July 2018',
        details: [
          'Obtained practical programming experience among Google engineers using HTML, CSS, JavaScript, and Python to develop and host a web application on Google App Engine',
        ],
      },
    ];

    this.skills = [
      {
        category: 'Languages',
        sub: [
          'Java',
          'HTML/CSS',
          'JavaScript/TypeScript',
          'Python',
          'C',
          'Shell Scripting',
          'SQL',
          'Ruby',
        ],
      },
      {
        category: 'Frameworks',
        sub: ['Bootstrap', 'React', 'Angular', 'Vue.js', 'Ruby on Rails'],
      },
      {
        category: 'Database',
        sub: ['SQLite', 'MySQL'],
      },
      {
        category: 'Code Management',
        sub: ['Git/GitHub', 'subversion (SVN)'],
      },
      {
        category: 'Software/Tools',
        sub: ['Microsoft Office', 'Node.js', 'JSON', 'Android Studio', 'Jira'],
      },
      {
        category: 'Soft Skills',
        sub: [
          'Communication',
          'Collaboration',
          'Leadership',
          'Problem Solving',
          'Organization',
          'Mentorship',
        ],
      },
    ];
  }

  ngOnInit(): void {}
}
