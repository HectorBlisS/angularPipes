import { Component, OnInit } from '@angular/core';
import {comidas} from '../comidas';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }

  comida: string = "pollo crudo";
  comida2: string = "TACOS DE LENGUA";
  bliss:string = "Una pinche pasta!"
  precio:number = 50;
  fecha:Date = new Date();
  foods:Array<Object> = comidas;


  ngOnInit() {
  }

}
