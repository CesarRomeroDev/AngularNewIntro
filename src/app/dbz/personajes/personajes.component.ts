import { Component, Input } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  constructor(
    private dbzService: DbzService
  ) { }

  /**
   * Input() nos ayuda a traer el arrglo del main principal se veria asi:
   * @Input() personajes: any[] = [];
   * pero al agrgar las interfaces en otro archivo llamas interfaces.ts lo 
   * importamos y lo podemos renombrar de tipo Personajes
   * @Input() personajes: Personaje[] = [];
   */

  // @Input() personajes: Personaje[] = [];

  get personajes() {
    return this.dbzService.personajes;
  }

  /** 
   * input le indicamos que el objeto personajes viene del componente padre.
   */
}
