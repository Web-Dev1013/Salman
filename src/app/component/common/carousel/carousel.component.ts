import { animate, style, transition, trigger, useAnimation } from "@angular/animations";
import { Component, Input } from "@angular/core";
import { scaleIn, scaleOut } from './carousel.animations';

@Component({ 
    selector: "app-carousel",
    templateUrl: "./carousel.component.html",
    styleUrls: ["./carousel.component.scss"],
    animations: [
      trigger('carouselAnimation', [
        transition('void=>*', [
          useAnimation(scaleIn, {params: {time: '600ms'}})
        ]),
        transition('*=>void', [
          useAnimation(scaleOut, {params: {time: '600ms'}})
        ])
      ])
    ]
})

export class CarouselComponent {
    @Input() slides: any;

    currentSlide = 0;

    constructor() {
      
    }

    onPreviousClick() {
        const previous = this.currentSlide - 1;
        this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
        console.log("previous clicked, new current slide is: ", this.currentSlide);
    }

    onNextClick() {
        const next = this.currentSlide + 1;
        this.currentSlide = next === this.slides.length ? 0 : next;
        console.log("next clicked, new current slide is: ", this.currentSlide);
    }

    ngOnInit(){
      this.preloadImages();
      
    }

    preloadImages() {
      console.log("+++++++",this.slides);
      for(const slide of this.slides) {
        new Image().src = slide.src;
      }
    }
}