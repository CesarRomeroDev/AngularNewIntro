import { Component } from '@angular/core';

import { Equipo } from '../interfaces/primera-division.interface';

@Component({
  selector: 'app-primera-division',
  templateUrl: './primera-division.component.html'
})
export class PrimeraDivisionComponent {


  nuevo: Equipo = {
    nombre: '',
    tactica: 0
  }

}
