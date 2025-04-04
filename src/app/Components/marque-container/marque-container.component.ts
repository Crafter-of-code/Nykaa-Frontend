import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-marque-container',
  imports: [NgFor],
  templateUrl: './marque-container.component.html',
  styleUrl: './marque-container.component.css',
})
export class MarqueContainerComponent {
  @Input() text_to_display: string = '';
  limit = 100;
}
