import { Component } from '@angular/core';
import { MarqueContainerComponent } from '../../Components/marque-container/marque-container.component';
import { RouterLink } from '@angular/router';
import { SectionHeadingComponent } from '../../Components/section-heading/section-heading.component';
import { url } from 'inspector';
import { NgFor } from '@angular/common';
import { HomePageService } from './services/home-page.service';
import { HeadingComponent } from '../../Components/heading/heading.component';
import { BottonCarouselComponent } from '../../Components/botton-carousel/botton-carousel.component';
import { BottomHeaderComponent } from '../../Components/bottom-header/bottom-header.component';

@Component({
  selector: 'app-homepage',
  imports: [
    NgFor,
    MarqueContainerComponent,
    RouterLink,
    HeadingComponent,
    BottonCarouselComponent,
    BottomHeaderComponent,
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {
  Send_to_the_marquee_tag: string = 'SALE IS LIVE';
  First_heading: string = 'UNMISSABLE OFFERS FOR YOU';
  Second_heading: string = "Today's major Markdowns";
  Third_heading: string = 'SO. MANY. DEALS.';
  Fourth_heading: string = 'BEAUTY STEALS TO SHOP';
  Major_beauty_bargain_heading: string = 'Major beauty bargain';
  Brand_offer: any = '';
  beauty_steal_to_shop_data: {
    url: string;
    offer: string;
    additional_offer: string;
  }[] = [];
  Today_major_breakdown:
    | {
        url: string;
        offer: string;
        addition_offer: string;
      }[]
    | any = '';
  so_many_deals:
    | {
        url: string;
        offer: string;
        addition_offer: string;
      }[]
    | any = '';
  Major_beauty_bargain_carousel_data: {
    id: number;
    title: string;
    price: number;
    link: string;
  }[] = [];
  constructor(private homePageService: HomePageService) {}
  ngOnInit() {
    this.Brand_offer = this.homePageService.get_brand_offer_data();
    this.Today_major_breakdown =
      this.homePageService.get_today_major_breakdown_data();
    // console.log(this.Today_major_breakdown);
    this.so_many_deals = this.homePageService.get_so_many_deals();
    this.beauty_steal_to_shop_data =
      this.homePageService.get_beauty_steals_to_shop_data();
    this.Major_beauty_bargain_carousel_data =
      this.homePageService.get_major_beauty_bargain_crousel_data();
  }
  /*
  // Styling starts here
  */
  // button_carousel: {} = {
  //   'background-color': 'black',
  // };
}
