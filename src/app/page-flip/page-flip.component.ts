import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as StPageFlip from 'page-flip';

@Component({
  selector: 'app-page-flip', 
  imports: [],
  templateUrl: './page-flip.component.html',
  styleUrls: ['./page-flip.component.css']
})
export class PageFlipComponent implements OnInit, AfterViewInit {
  @ViewChild('bookContainer', { static: true }) bookContainer: ElementRef;

  images: string[] = [
    'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg', 
    'https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630',
    // Add more image URLs as needed
  ];
  currentPage = 0;

  pageFlip: any; 

  ngOnInit() {}

  ngAfterViewInit() {
    this.initializePageFlip();
  }

  initializePageFlip() {
    this.pageFlip = new StPageFlip(this.bookContainer.nativeElement, {
      width: 640,
      height: 480,
      showCover: true
    });

    this.pageFlip.loadFromImages(this.images[this.currentPage]);

    this.pageFlip.on('flip', (e) => {
      this.currentPage = e.data;
      this.loadNextPageImage();
    });
  }

  loadNextPageImage() {
    if (this.currentPage < this.images.length - 1) {
      this.currentPage++;
      this.pageFlip.loadFromImages(this.images[this.currentPage]);
    }
  }
}
