import { Component } from '@angular/core';

interface Equipo {
  nombre: string;
  tactica: number;
}

@Component({
  selector: 'app-primera-division',
  templateUrl: './primera-division.component.html'
})
export class PrimeraDivisionComponent {

  equipos: Equipo[] = [
    {
      nombre: 'Manchester',
      tactica: 80
    },
    {
      nombre: 'Barcelona',
      tactica: 90
    },
    {
      nombre: 'Roma',
      tactica: 70
    }
  ]

  nuevo: Equipo = {
    nombre: '',
    tactica: 0
  }

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return
    }
    console.log(this.nuevo);

    this.equipos.push(this.nuevo);
    this.nuevo = {
      nombre: '',
      tactica: 0
    }
  }

}
