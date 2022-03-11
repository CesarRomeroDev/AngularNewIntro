import { Component, Input } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  /**
   * Input() nos ayuda a traer el arrglo del main principal se veria asi:
   * @Input() personajes: any[] = [];
   * pero al agrgar las interfaces en otro archivo llamas interfaces.ts lo 
   * importamos y lo podemos renombrar de tipo Personajes
   * @Input() personajes: Personaje[] = [];
   */

  @Input() personajes: Personaje[] = [];
}
