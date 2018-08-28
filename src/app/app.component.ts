import { Component, OnInit } from '@angular/core';
import * as PIXI from 'pixi.js-legacy';
import * as Scryfall from 'scryfall-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'ProxyGenius';
  solRingSearchResults: Scryfall.Card;

  ngOnInit() {

    this._demoScryfallSearch();

    this._demoPixiCanvas();

  }

  private _demoScryfallSearch() {
    Scryfall.Cards.search('sol-ring')
    .on('data', card => {
      this.solRingSearchResults = card;
      console.log('received data for ' + card.name);
    }).on('end', () => {
      console.log('done');
    });
  }

  private _demoPixiCanvas() {
    //Create a Pixi Application
    let app = new PIXI.Application();

    //Add the canvas that Pixi automatically created for you to the HTML document
    document.body.appendChild(app.view);

    // Set window height & width to the window size
    app.renderer.view.style.position = "absolute";
    app.renderer.view.style.display = "block";
    app.renderer.autoResize = true;
    app.renderer.resize(window.innerWidth, window.innerHeight);
  }

}
