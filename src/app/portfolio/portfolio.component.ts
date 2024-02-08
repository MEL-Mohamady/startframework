import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  images = [
    { src: './assets/poert1.png' },
    { src: './assets/port2.png' },
    { src: './assets/port3.png' },
    { src: './assets/poert1.png' },
    { src: './assets/port2.png' },
    { src: './assets/port3.png' }
  ];
  showImageModal: boolean = false;
  clickedImage: string = '';

  

  showImage(imageSrc: string) {
    this.clickedImage = imageSrc;
    this.showImageModal = true;
  }

  hideImage() {
    this.showImageModal = false;
  }
}

