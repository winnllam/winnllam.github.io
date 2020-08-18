import { Component, OnInit, HostListener } from '@angular/core';
import cards from './json/cards.json';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss'],
})
export class ActivitiesComponent implements OnInit {
  innerHeight: number;
  cards: object;
  id: string;

  constructor() {
    this.cards = cards;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerHeight = window.innerHeight;

    var el = document.getElementsByClassName('modal') as HTMLCollectionOf<
      HTMLElement
    >;
    for (var i = 0; i < el.length; i++) {
      el[i].style.height = this.innerHeight + 'px';
    }
  }

  @HostListener('window:click', ['$event'])
  onClick(e) {
    if (e.target.parentElement.id == 'activity-cards') {
      this.closeModal(this.id);
    }
  }

  ngOnInit(): void {
    this.innerHeight = window.innerHeight;
  }

  openModal(id: string) {
    var modal = document.getElementById(id);
    modal.style.display = 'block';
    this.id = id;
  }

  closeModal(id: string) {
    var modal = document.getElementById(id);
    modal.style.display = 'none';
    this.id = '';
  }
}
