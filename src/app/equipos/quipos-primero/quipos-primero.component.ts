import { Component } from '@angular/core';

import { EquipoService } from '../services/equipos.service';

@Component({
  selector: 'app-quipos-primero',
  templateUrl: './quipos-primero.component.html'
})
export class QuiposPrimeroComponent {

  constructor(
    private equipoService: EquipoService
  ) { }

  get equipos() {
    return this.equipoService.equipo;
  }

}
