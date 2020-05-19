import { Component, OnInit, HostListener } from '@angular/core';
import cards from './json/cards.json';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css'],
})
export class ActivitiesComponent implements OnInit {
  innerHeight: number;
  cards: object;

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

  ngOnInit(): void {
    this.innerHeight = window.innerHeight;
  }

  openModal(id: string) {
    var modal = document.getElementById(id);
    modal.style.display = 'block';
  }

  closeModal(id: string) {
    var modal = document.getElementById(id);
    modal.style.display = 'none';
  }
}
