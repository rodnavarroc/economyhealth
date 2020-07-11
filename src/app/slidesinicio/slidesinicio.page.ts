import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'slides-example',
  template: `
    <ion-content>
      <ion-slides pager="true" [options]="slideOpts">
        <ion-slide>
          <h1>Slide 1</h1>
        </ion-slide>
        <ion-slide>
          <h1>Slide 2</h1>
        </ion-slide>
        <ion-slide>
          <h1>Slide 3</h1>
        </ion-slide>
      </ion-slides>
    </ion-content>
  `
})
export class SlideExample {
  // Optional parameters to pass to the swiper instance.
  // See http://idangero.us/swiper/api/ for valid options.
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor() {}
}

@Component({
  selector: 'app-slidesinicio',
  templateUrl: './slidesinicio.page.html',
  styleUrls: ['./slidesinicio.page.scss'],
})
export class SlidesinicioPage implements OnInit {
  public form = [
    { val: 'Acuerdo', isChecked: false }
  ];
  constructor() { }

  ngOnInit() {
  }

}
