import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(
    private dbzService: DbzService
  ) { }

  /** .trim() : Para quitar espacios */
  /** .length : Para saber cuantos items hay numerico */

  // cambiarNombre(event: any) {
  //   console.log(event.target.value);
  // }

  /**
   * Output necesitamos emitir un valor al componente padre
   * Output es de tipo generico y pode emitir cualquier cosa (eventos)
   */
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {

    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    // console.log(this.nuevo);
    /**
     * emite un mensaje
     * .emit : puede mandar un valor opcional
     */
    // this.onNuevoPersonaje.emit(this.nuevo);
    // this.personajes.push(this.nuevo); // se maneja de la siguiente forma, arriba

    this.dbzService.agregarPersonaje(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

}
