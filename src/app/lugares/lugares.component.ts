import { Component } from "@angular/core";
import { LugaresServices } from '../services/lugares.services';
import {trigger, state, style, transition, animate} from '@angular/animations';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  animations: [
    trigger('contenedorAnimable', [
      state('inicial', style({
        opacity: 0,
        backgroundColor: 'green',
        transform: 'rotate3d(0,0,0,0deg)'
      })),
      state('final', style({
        opacity: 1,
        backgroundColor: 'yellow',
        transform: 'rotate3d(5,10,20,30deg)'
      })),
      transition('inicial => final', animate(1000)),
      transition('final => inicial', animate(500))
    ])
  ]
})
export class LugaresComponent {
  title = 'MaySquare';
  state = 'inicial';
  lat: number = 6.2179555;
  lng: number = -75.5858882;
  lugares = null;
  animar(){
    this.state= (this.state === 'final') ? 'inicial' : 'final';
  }
  
  constructor(private lugaresServices: LugaresServices) {
    lugaresServices.GetLugares()
    .subscribe(lugares => {
      this.lugares = lugares;
    });

    // lugaresServices.GetLugares()
    // .subscribe(lugares => {
    //   this.lugares = lugares;
    //   var me= this;
    //   this.lugares = Object.keys(me.lugares).map(function (key) {return me.lugares[key]; });
    // });

  }
}



