import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';
declare var anime: any;
import cards from './json/cards.json';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss'],
})
export class ActivitiesComponent implements OnInit, AfterViewInit {
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

  getCardClasses(card: any) {
    return {
      card: true,
      evtbox: true,
      active: card.duration.includes('Present'),
    };
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
