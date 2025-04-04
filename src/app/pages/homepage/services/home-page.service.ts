import { Injectable } from '@angular/core';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root',
})
export class HomePageService {
  constructor() {}

  get_brand_offer_data(): any {
    return this.Brand_offer;
  }
  private Brand_offer: {
    image_url: string;
    offer: string;
    Additional_offer: string;
  }[] = [
    {
      image_url:
        'https://images-static.nykaa.com/uploads/cb6b0222-a5fb-4e19-b1c0-961ceed096b7.jpg?tr=cm-pad_resize,w-750',
      offer: 'Flat 10% off',
      Additional_offer: 'Free Mini Above 1499',
    },
    {
      image_url:
        'https://images-static.nykaa.com/uploads/3b14fde1-67a5-4546-aa6c-218c07f42d45.jpg?tr=cm-pad_resize,w-750',
      offer: 'Up To 20% Off',
      Additional_offer: 'On Entire Brand',
    },
    {
      image_url:
        'https://images-static.nykaa.com/uploads/f184581d-5a05-4b3d-8e7b-8e6ade4e9523.jpg?tr=cm-pad_resize,w-750',
      offer: 'Gift On Order',
      Additional_offer: '3X Faster Styling',
    },
    {
      image_url:
        'https://images-static.nykaa.com/uploads/b597ce31-57b7-4b51-9d0d-312fd5a1f420.jpg?tr=cm-pad_resize,w-750',
      offer: 'Up To 15% Off',
      Additional_offer: 'Free Gift on 1499',
    },
    {
      image_url:
        'https://images-static.nykaa.com/uploads/1b87acf4-6f04-4b6a-b4f1-a85a50653d04.jpg?tr=cm-pad_resize,w-750',
      offer: 'Up To 25% Off',
      Additional_offer: 'On Entire Brand',
    },
    {
      image_url:
        'https://images-static.nykaa.com/uploads/e569cfb7-b43e-42ff-8de8-46e5bac5b3dc.jpg?tr=cm-pad_resize,w-750',
      offer: 'Minimalist',
      Additional_offer: 'Mini Vitamin B5...',
    },
    {
      image_url:
        'https://images-static.nykaa.com/uploads/a79277ce-ede5-4409-a187-1de02a49399c.jpg?tr=cm-pad_resize,w-750',
      offer: 'Up to 35% Off',
      Additional_offer: 'On Bestsellers',
    },
    {
      image_url:
        'https://images-static.nykaa.com/uploads/f589670b-8d77-4d2b-9212-c792e0fa3ae4.jpg?tr=cm-pad_resize,w-750',
      offer: 'Up To 15%',
      Additional_offer: 'Extra 10% Off on 699',
    },
    {
      image_url:
        'https://images-static.nykaa.com/uploads/ccbe2365-0d2d-4776-8973-d1be5ffd057c.jpg?tr=cm-pad_resize,w-750',
      offer: 'Up to 25% Off',
      Additional_offer: 'On Entire Range',
    },
    {
      image_url:
        'https://images-static.nykaa.com/uploads/45000af3-e3f4-4246-bc81-77313d7fc8f0.jpg?tr=cm-pad_resize,w-750',
      offer: 'Up To 50% Off',
      Additional_offer: 'Extra 10% Off on 699',
    },
    {
      image_url:
        'https://images-static.nykaa.com/uploads/c69ed164-519b-4fa8-ad50-20bb25a0742a.jpg?tr=cm-pad_resize,w-750',
      offer: 'Up 20% Off',
      Additional_offer: 'On Kay Bestseller',
    },
    {
      image_url:
        'https://images-static.nykaa.com/uploads/615877b6-faf2-491d-b3b8-837534da5be3.jpg?tr=cm-pad_resize,w-750',
      offer: 'Up To 25% Off',
      Additional_offer: 'On Entire Range',
    },
  ];
  private Today_Major_breakdown: {
    url: string;
    offer: string;
    additional_offer: string;
  }[] = [
    {
      url: 'https://images-static.nykaa.com/uploads/c02bba5a-b05e-43fb-ad80-008bbffc5996.jpg?tr=cm-pad_resize,w-300',
      offer: 'Up to 25% Off',
      additional_offer: 'On Summer Essentials',
    },
    {
      url: 'https://images-static.nykaa.com/uploads/ffaf2bfa-ac2e-413a-a0cb-9524826b726f.jpg?tr=cm-pad_resize,w-300',
      offer: 'Up to 30% Off',
      additional_offer: 'On Skincare Essentials',
    },
    {
      url: 'https://images-static.nykaa.com/uploads/4bd9d509-dcd4-4ba2-bd09-e25f9677165e.jpg?tr=cm-pad_resize,w-300',
      offer: 'Up To 20% Off',
      additional_offer: 'On Entire Range',
    },
    {
      url: 'https://images-static.nykaa.com/uploads/71244033-1d0a-4fb7-96a3-b317a9c8164a.jpg?tr=cm-pad_resize,w-300',
      offer: 'Up to 60% Off',
      additional_offer: 'On Bestsellers',
    },
    {
      url: 'https://images-static.nykaa.com/uploads/29fcb561-da14-4474-886c-21852c59e900.jpg?tr=cm-pad_resize,w-300',
      offer: 'Up To 30% Off',
      additional_offer: 'On entire Range',
    },
    {
      url: 'https://images-static.nykaa.com/uploads/dcd473fd-c399-401f-ba23-629a8feff670.jpg?tr=cm-pad_resize,w-300',
      offer: 'Up to 35% Off+',
      additional_offer: 'Extra 5% Off + Freebie',
    },
    {
      url: 'https://images-static.nykaa.com/uploads/062b5a07-13e0-4bc4-bbe4-b6ca741fca9f.jpg?tr=cm-pad_resize,w-300',
      offer: 'Up to 35% Off',
      additional_offer: 'On Entire Brand',
    },
    {
      url: 'https://images-static.nykaa.com/uploads/5ce3ac63-2268-41a2-b2a7-81a9c3f990f7.jpg?tr=cm-pad_resize,w-300',
      offer: 'Buy 2 Get 1 Free',
      additional_offer: 'ON Entire Brand',
    },
    {
      url: 'https://images-static.nykaa.com/uploads/662fa493-769f-4a87-8d52-b39bb51d0eac.jpg?tr=cm-pad_resize,w-300',
      offer: 'Up to 20%',
      additional_offer: 'ON Entire Brand',
    },
    {
      url: 'https://images-static.nykaa.com/uploads/2241f07b-1efa-4428-b88e-c20ef1822a90.jpg?tr=cm-pad_resize,w-300',
      offer: 'Flat 25% Off',
      additional_offer: 'On Bestsellers',
    },
    {
      url: 'https://images-static.nykaa.com/uploads/c0383bfa-a3a7-466f-aca1-cf0b6944f57b.jpg?tr=cm-pad_resize,w-300',
      offer: 'Up to 25% Off',
      additional_offer: 'On Entire Range',
    },
    {
      url: 'https://images-static.nykaa.com/uploads/5142b715-c205-4a2a-9003-99e81d7cf373.jpg?tr=cm-pad_resize,w-300',
      offer: '',
      additional_offer: 'On Bestsellers',
    },
  ];
  get_today_major_breakdown_data(): any {
    return this.Today_Major_breakdown;
  }
  private so_many_deals: {
    url: string;
    offer: string;
    additional_offer: string;
  }[] = [
    {
      url: 'https://images-static.nykaa.com/uploads/5f596613-7fdc-438a-9266-274907b3d856.jpg?tr=cm-pad_resize,w-300',
      offer: 'Up To 50% Off',
      additional_offer: 'On Entire Brand',
    },
    {
      url: 'https://images-static.nykaa.com/uploads/cef8b91f-37c7-42e2-9774-467a84da6255.jpg?tr=cm-pad_resize,w-300',
      offer: 'Up To 33% Off',
      additional_offer: 'Pick A free Gird on 1499+',
    },
    {
      url: 'https://images-static.nykaa.com/uploads/582dcd7d-900f-47d2-bbb2-beeb0a46f213.jpg?tr=cm-pad_resize,w-300',
      offer: '',
      additional_offer: '',
    },
  ];
  get_so_many_deals(): {
    url: string;
    offer: string;
    additional_offer: string;
  }[] {
    return this.so_many_deals;
  }
  private beauty_steals_to_shop: {
    url: string;
    offer: string;
    additional_offer: string;
  }[] = [
    {
      url: 'https://images-static.nykaa.com/uploads/e89dee7e-9521-4741-9d97-e70f82676a3b.jpg?tr=cm-pad_resize,w-450',
      offer: 'Flat 40% Off',
      additional_offer: 'First Time Ever',
    },
    {
      url: 'https://images-static.nykaa.com/uploads/a73bcdc2-fcf2-47b1-8fba-e5a118243ba7.jpg?tr=cm-pad_resize,w-450',
      offer: 'Up To 25% Off',
      additional_offer: 'On Entire Range',
    },
    {
      url: 'https://images-static.nykaa.com/uploads/4f644d44-69a1-4941-918e-cc958e474020.jpg?tr=cm-pad_resize,w-450',
      offer: 'Up to 45% Off',
      additional_offer: 'On Entire Brand',
    },
    {
      url: 'https://images-static.nykaa.com/uploads/05187bed-ff70-4e84-9673-6c52d75995a3.jpg?tr=cm-pad_resize,w-450',
      offer: '',
      additional_offer: '',
    },
  ];
  get_beauty_steals_to_shop_data(): {
    url: string;
    offer: string;
    additional_offer: string;
  }[] {
    return this.beauty_steals_to_shop;
  }
  private major_beauty_bargain_crousel: {
    id: number;
    title: string;
    price: number;
    link: string;
  }[] = [
    { id: 1, title: 'lipstick', price: 499, link: '#' },
    { id: 2, title: 'facewash', price: 499, link: '#' },
    { id: 3, title: 'sunscreem', price: 499, link: '#' },
    { id: 4, title: 'bodylotion', price: 699, link: '#' },
    { id: 5, title: 'showergel', price: 699, link: '#' },
    { id: 6, title: 'shampoo', price: 699, link: '#' },
    { id: 7, title: 'Kajal & eyeliner', price: 399, link: '#' },
    { id: 8, title: 'face Mosturisers', price: 999, link: '#' },
  ];
  get_major_beauty_bargain_crousel_data(): {
    id: number;
    title: string;
    price: number;
    link: string;
  }[] {
    return this.major_beauty_bargain_crousel;
  }
}
