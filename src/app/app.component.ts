import { Component, OnInit } from '@angular/core';
import * as PIXI from 'pixi.js-legacy';
import * as Magic from 'mtgsdk-ts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ProxyGenius';

  ngOnInit() {
    //let sprite = PIXI.Sprite.fromImage('assets/image.png');
    //let magic = Magic.Cards.find('1').then(result => console.log(result.name));
    Magic.Cards.find("08618f8d5ebdc0c4d381ad11f0563dfebb21f4ee").then(result => console.log(result.name)); // Blood Scrivener
  }

}
