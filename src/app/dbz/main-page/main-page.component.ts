import { Component } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  // agregar(event: any) {
  //   event.preventDefault(); //prevee el comportamiento por defecto que hace el sumit de un formulario.(cargar tota la pagina)
  //   console.log('hey');
  // }

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ]

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  /** .trim() : Para quitar espacios */
  /** .length : Para saber cuantos items hay numerico */

  // cambiarNombre(event: any) {
  //   console.log(event.target.value);
  // }

  agregar() {

    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    console.log(this.nuevo);

    this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

}
