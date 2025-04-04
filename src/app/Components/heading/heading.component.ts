import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
// import { UpperCasePipe } from '@angular/common';
@Component({
  selector: 'app-heading',
  imports: [CommonModule],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.css',
})
export class HeadingComponent {
  @Input() Heading: string = '';
}
