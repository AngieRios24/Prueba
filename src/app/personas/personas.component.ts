import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { peticiones } from 'src/app/services/peticiones';
// import { Chart } from 'chart.js';
// import { PeticionesService } from 'src/app/peticiones.service';
@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  canvas: any;
  barChart: any;
  personas: any;
  tipo: string;
  persona: any;
  //@ViewChild('canvas1') canvas1: ElementRef;
  constructor(private periciones: peticiones, private _http: HttpClient) { }

  ngOnInit(): void {
    this.consultarPersonas();
  }

  consultarPersonas() {
    this.periciones.getConsultaMetodo("/personas").subscribe(datos => {
      this.tipo="personas";
      this.personas= datos.personas;
    });

  }

  editarPersona(persona: any){
    this.periciones.getConsultaUnParametro(persona.cedula, "/personas").subscribe(datos=>{
      this.tipo="persona";
      this.persona= datos.persona;
      console.log(datos.persona);
      
    });
  }


}
