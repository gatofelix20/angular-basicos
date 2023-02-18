import { Component } from '@angular/core';
import { Personaje } from '../interfaces/bdz.interface';
import { DbzService } from '../services/dbz.service';
import { PersonajesComponent } from '../personajes/personajes.component';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  
})
export class MainPageComponent {
   

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

   constructor() {}

}
