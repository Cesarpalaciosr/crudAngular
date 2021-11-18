import { Component } from "@angular/core";

@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.html'
})

export class Micomponente{
    constructor(){
        console.log("Componente cargado");
    }
}