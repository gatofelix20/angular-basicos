import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/bdz.interface';
import { PersonajesComponent } from '../personajes/personajes.component';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  
})
export class AgregarComponent {


  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor( private DbzService: DbzService) {

  }

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

agregar() {
  if ( this.nuevo.nombre.trim().length=== 0) {return;}
  
  //this.onNuevoPersonaje.emit( this.nuevo);

  this.DbzService.agregarPersonajes( this.nuevo);

  this.nuevo = {

    nombre: '',
    poder: 0
  }
}
}
