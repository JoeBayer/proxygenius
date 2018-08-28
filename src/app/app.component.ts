import { Component, OnInit } from '@angular/core';
//import * as PIXI from 'pixi.js-legacy';
import * as Scryfall from 'scryfall-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ProxyGenius';
  solRingSearchResults: Scryfall.Card;

  ngOnInit() {

    // Demo basic Scryfall search and display
    Scryfall.Cards.search('sol-ring')
    .on('data', card => {
      this.solRingSearchResults = card;
      console.log('received data for ' + card.name);
    }).on('end', () => {
      console.log('done');
    });
  }

}
