import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
// import { AboutpageComponent } from './pages/aboutpage/aboutpage.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    children: [],
  },
  {
    path: '**',
    component: PagenotfoundComponent,
  },
];
