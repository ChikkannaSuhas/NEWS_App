import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NSEService } from '../../app/services/NSE.service';


@Component({
  selector: 'NSE',
  templateUrl: 'NSE.html'
})
export class NSEPage {
  items: any;
  category: any="espn";
  limit:any;
  constructor(public navCtrl: NavController, private nseService:NSEService) {
  }

  ngOnInit(){
    this.getPosts(this.category);
    this.getbaseUrlChannels();
  }


  getbaseUrlChannels(){

        this.nseService.getbaseUrlChannels().subscribe(response => {
        this.limit = response.sources;
        


    });    
    }


  getPosts(category){
    this.nseService.getPosts(category).subscribe(response => {
      this.items = response.articles;	
      

    });
  }


  changeCategory(){
    this.getPosts(this.category);
  }

}
