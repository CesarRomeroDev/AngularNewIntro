import { Component } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  // agregar(event: any) {
  //   event.preventDefault(); //prevee el comportamiento por defecto que hace el sumit de un formulario.(cargar tota la pagina)
  //   console.log('hey');
  // }



  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  /**
   * 
   * @param dbzService inyeccion de dependencias(inyectando las dependencias en este componente) , viene de los servicios.
   */
  constructor() { }

}
