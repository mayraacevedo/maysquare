import { Injectable } from "@angular/core";
import { AngularFireDatabase } from '@angular/fire/database';
import { Http, Headers } from '@angular/http';
//import 'rxjs/add/operator/map';

@Injectable()

export class LugaresServices { 
    API_ENDPOINT =  'https://maysquare.firebaseio.com';
    lugares: any = [
      {id: 1, plan: 'pagado', cercania: 1, distancia: 1, active: 'true', nombre: 'sushi' }
    ];
      constructor(private afDB: AngularFireDatabase, private http: Http) { }

      public GetLugares() {
        return this.afDB.list('lugares/').valueChanges();
        // return this.http.get(this.API_ENDPOINT + '/.json')
        // .map((resultado) => {
        //   const data = resultado.json().lugares;
        //   return data;
        // });
      }
      public buscarLugar(id) {
        return this.lugares.filter( (lugar) => { return lugar.id == id })[0] || null;
      }

      public guardarLugar(lugar) {
        this.afDB.database.ref('lugares/' + lugar.id).set(lugar);
        // const headers = new Headers({"Content-Type":"application/json"});
        // return this.http.post(this.API_ENDPOINT + '/lugares.json', lugar, {headers:headers});
      }
      public EditarLugar(lugar) {
        this.afDB.database.ref('lugares/' + lugar.id).set(lugar);
      }
      public obtenerGeoData(direccion) {
        return this.http.get('http://maps.google.com/maps/api/geocode/json?address' + direccion);
      }
      
      public getLugar(id) {
        return this.afDB.object('lugares/' + id).valueChanges();
      }
     
}