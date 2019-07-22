import { Component } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { LugaresServices } from '../services/lugares.services';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
})
export class DetalleComponent {
  id = null;
  lugar: any = {};
  constructor(private route: ActivatedRoute, private lugaresServices: LugaresServices) {
    console.log(this.route.snapshot.params['id']);
    this.id = this.route.snapshot.params['id'];
    this.lugar = this.lugaresServices.buscarLugar(this.id);
  }

}



