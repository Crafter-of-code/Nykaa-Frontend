import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HeadingComponent } from '../heading/heading.component';

@Component({
  selector: 'app-botton-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './botton-carousel.component.html',
  styleUrl: './botton-carousel.component.css',
})
export class BottonCarouselComponent {
  @Input() Template_data:
    | {
        id: number;
        title: string;
        price: number;
        link: string;
      }[]
    | null = null;
  Decrement() {
    console.log('Derement');
  }
  Increment() {
    console.log('increment');
  }
}
