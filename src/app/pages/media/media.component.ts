import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MediaService } from 'src/app/services/media.service';
declare var anime: any;

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
})
export class MediaComponent implements OnInit, AfterViewInit {
  imageLinks: any[] = [];

  constructor(private mediaService: MediaService) {}

  ngOnInit(): void {
    this.loadImages();
  }

  loadImages() {
    this.mediaService.getImageLinks().subscribe((data) => {
      this.imageLinks = data.urls;
      console.log(this.imageLinks);
    });
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
}
