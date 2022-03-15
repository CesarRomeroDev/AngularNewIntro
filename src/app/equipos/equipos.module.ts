import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeraDivisionComponent } from './primera-division/primera-division.component';
import { FormsModule } from '@angular/forms';
import { AgregarEquipoComponent } from './agregar-equipo/agregar-equipo.component';
import { QuiposPrimeroComponent } from './quipos-primero/quipos-primero.component';
import { EquipoService } from './services/equipos.service';



@NgModule({
  declarations: [
    PrimeraDivisionComponent,
    AgregarEquipoComponent,
    QuiposPrimeroComponent
  ],
  exports: [
    PrimeraDivisionComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    EquipoService
  ]
})
export class EquiposModule { }
