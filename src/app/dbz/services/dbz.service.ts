import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/bdz.interface";
import { PersonajesComponent } from '../personajes/personajes.component';

@Injectable()
export class DbzService {

   private _personajes: Personaje[] = [

        {
          nombre: 'Goku',
          poder: 15000
        },
      
        {
          nombre: 'Vegeta',
          poder: 7500
        }
    ];

    get personajes(): Personaje[] {
      return [...this._personajes];
    }
  
constructor() {}

agregarPersonajes(personaje: Personaje) {
this._personajes.push( personaje );
}

}