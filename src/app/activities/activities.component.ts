import { Component, OnInit } from '@angular/core';
import cards from './json/cards.json';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css'],
})
export class ActivitiesComponent implements OnInit {
  cards: object;

  constructor() {
    this.cards = cards;
  }

  ngOnInit(): void {}

  openModal(id: string) {
    var modal = document.getElementById(id);
    modal.style.display = 'block';
  }

  closeModal(id: string) {
    var modal = document.getElementById(id);
    modal.style.display = 'none';
  }
}
