import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})

/**
 * OnInit : es el primer ciclo de vida , con su contructor
 * son ciertos pasos o metodos que dispara angular de manera automatica
 */
export class ListadoComponent {

  // constructor() {
  //   console.log('constructor');
  // }

  /**
   * ngOnInit : para inicializar , peticion a un servicio, traer informacion. 
   */
  // ngOnInit(): void {
  //   console.log('ngOnInit');
  // }

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroeBorrado: string = '';

  borrarHeroe() {
    // delete this.heroes[1];
    this.heroeBorrado = this.heroes.shift() || '';

  }

}
