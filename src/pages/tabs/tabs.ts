import { Component } from '@angular/core';

import { NSEPage } from '../NSE/NSE';
import { AboutPage } from '../about/about';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = NSEPage;
 
  tab3Root: any = AboutPage;
  constructor() {

  }
}
