import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  /* public: variables */
  /* image url to check support of webp images */
  public surprisebackURL: string = 'assets/surpriseback.png';
  public placeholderURL: string = 'assets/placeholder.png';


  constructor(public platform: Platform) { }

  ngOnInit(): void {
    const canvas: HTMLCanvasElement = document.createElement('canvas');

    if (
      !!(canvas.getContext && canvas.getContext('2d')) &&
      canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0
    ) {
      this.surprisebackURL = 'assets/surpriseback.webp';
      this.placeholderURL = 'assets/placeholder.webp';
    }
  }
}
