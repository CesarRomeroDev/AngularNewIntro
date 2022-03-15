import { Component, Input } from '@angular/core';

import { Equipo } from '../interfaces/primera-division.interface';
import { EquipoService } from '../services/equipos.service';

@Component({
  selector: 'app-agregar-equipo',
  templateUrl: './agregar-equipo.component.html'
})
export class AgregarEquipoComponent {


  @Input() nuevo: Equipo = {
    nombre: '',
    tactica: 0
  }

  constructor(
    private equipoService: EquipoService
  ) { }

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return
    }

    this.equipoService.agregarEquipo(this.nuevo);

    this.nuevo = {
      nombre: '',
      tactica: 0
    }
  }
}
