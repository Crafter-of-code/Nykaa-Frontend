import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderTopStrapComponent } from '../header-top-strap/header-top-strap.component';
import { BottomHeaderComponent } from '../bottom-header/bottom-header.component';

@Component({
  selector: 'app-header',
  imports: [RouterLink, HeaderTopStrapComponent],
  // BottomHeaderComponent
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
