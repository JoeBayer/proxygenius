import { Component, OnInit } from '@angular/core';
//import * as PIXI from 'pixi.js-legacy';
import * as Magic from 'mtgsdk-ts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ProxyGenius';
  solRingSearchResults: Magic.Card[];

  ngOnInit() {
    //let magic = Magic.Cards.find('1').then(result => console.log(result.name));
    let solRingSearchCriteria: Magic.CardFilter = {
      name: 'Sol Ring'
    }

    Magic.Cards
    .where(solRingSearchCriteria)
    .then((searchResult: Magic.Card[])=> {
      console.log('Search Results:');
      this.solRingSearchResults = searchResult.filter((result)=>{
        return result.imageUrl;
      });
      console.log(this.solRingSearchResults);
    });
  }
}
