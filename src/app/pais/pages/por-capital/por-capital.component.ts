import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})

export class PorCapitalComponent{

  termino:string = 'hola mundo'
  hayError: boolean = false;
  paises: Pais[] = [];

  buscar(termino:string){

    this.hayError = false;
    this.termino = termino

    if(this.termino.length==0){
      return;

      console.log('dentro')

    }
      console.log(this.termino)
      this.paisService.buscarCapital(this.termino).subscribe( resp =>{
        this.paises = resp
        
      },(err) => {
        console.log('Error')
        console.log(err)
        this.hayError = true;
        this.paises = []
      });
    

    
  }
  constructor(private paisService:PaisService) { }


}
