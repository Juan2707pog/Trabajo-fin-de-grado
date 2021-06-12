import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li{
      cursor:pointer;
    }
    `
  ]
})
export class PorPaisComponent{

  termino:string = ''
  hayError: boolean = false;
  paises: Pais[] = [];
  paisesSurgeridos:Pais[] = [];
  mostrarSurgerencias:boolean = false;

  buscar(termino:string){

    this.hayError = false;
    this.termino = termino
    this.mostrarSurgerencias = false;

    if(this.termino.length==0){
      return;

      console.log('dentro')

    }
      console.log(this.termino)
      this.paisService.buscarPais(this.termino).subscribe( resp =>{
        this.paises = resp
        console.log(this.paises)
        
        
      },(err) => {
        console.log('Error')
        console.log(err)
        this.hayError = true;
        this.paises = []
      });
    

    
  }

  surgerencias(termino:string){
    this.mostrarSurgerencias = true
    this.hayError = false;
    this.termino = termino;

    console.log('Hola  ',termino)

    this.paisService.buscarPais(termino)
    .subscribe(paises => 
      this.paisesSurgeridos = paises.splice(0,5),
      (err) => this.paisesSurgeridos = [] 
      );

  }

  buscarSurgerido(termino:string){
    this.buscar(termino);
    this.mostrarSurgerencias = false
   
  }
  constructor(private paisService:PaisService) { }


}
