import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";

@NgModule({
    /** Declaramos los Componentes que son las clases de nuestros archivos component */
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    /** exportamos y que sea visible nuestro ListadoComponen que es el HTML  */
    exports: [
        ListadoComponent
    ],
    /* Ofrece directivas de Angular como ngFor, ngIf etc */
    imports: [
        CommonModule
    ]
})
export class HeroesModule { }