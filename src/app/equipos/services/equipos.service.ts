import { Injectable } from "@angular/core";
import { Equipo } from "../interfaces/primera-division.interface";

@Injectable()

export class EquipoService {

    private _equipos: Equipo[] = [
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

    get equipo(): Equipo[] {
        return [...this._equipos];
    }

    constructor() { }

    agregarEquipo(equipo: Equipo) {
        this._equipos.push(equipo);
    }
}