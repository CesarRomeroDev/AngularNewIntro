/**
 * @angular/core: es un componente de angular y de la configuaracion de la metadata
 */
import { Component } from '@angular/core';

@Component({
    /**
     * selector: nos permite renderizar el DOM en app.component.html
     * <app-contador></app-contador> asi de esta forma lo agregamos en
     * app.component.html
     */
    selector: 'app-contador',
    /**
     * Templat: podemos agregar nuestro html
     */
    template: `

    <h1>{{ title }}</h1>
    <h3>La base es: <strong>{{ base}}</strong></h3>

    <button (click)=" acumular( base ) "> {{ base }} </button>
    <span>{{ numero }}</span>
    <button (click)=" acumular( -base ) "> {{ base }} </button>

    `
})
/**
 * clase de componente : siempre se agrega el nombre del archivo como clase.
 */
export class ContadorComponent {
    public title: string = 'contador App';
    public numero: number = 10;
    public base: number = 5;

    acumular(valor: number) {
        this.numero += valor;
    }
}