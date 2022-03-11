import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeraDivisionComponent } from './primera-division/primera-division.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PrimeraDivisionComponent
  ],
  exports: [
    PrimeraDivisionComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class EquiposModule { }
