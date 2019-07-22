import { Component } from "@angular/core";
import { LugaresServices } from '../services/lugares.services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html'
})
export class CrearComponent {
  lugar: any = {};
  id: any = null;
  constructor( private lugaresServices: LugaresServices, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
    if(this.id !== 'new') {
        this.lugaresServices.getLugar(this.id)
        .subscribe((lugar) => {
            this.lugar = lugar;
        });
        console.log(this.lugar);
    }
  }
  guardarLugar() {
    var direccion = this.lugar.calle + ',' +  this.lugar.ciudad + ',' + this.lugar.pais;
    // this.lugaresServices.obtenerGeoData(direccion)
    // .subscribe((result) => {
      this.lugar.lat = 0;
      this.lugar.lng = 0;
      if (this.id !== 'new') {
        this.lugaresServices.EditarLugar(this.lugar);
        alert('Negocio editado con éxito');
      } else {
        this.lugar.id = Date.now();
        this.lugaresServices.guardarLugar(this.lugar);
        alert('Negocio guardado con éxito');
      }
      this.lugar = {};
    // });
  }
}



