import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [ `
  
    button{
      margin-right:5px;
    }
  
  
    `

    
  ]
})
export class PorRegionComponent{

  termino:string = 'hola mundo';
  hayError: boolean = false;
  paises:Pais[] = []

  regiones:string[] =['Africa','Americas','Asia','Europe','Oceania']
  RegionActiva:string = '';

  getclaseCss(region:string):string{
    return (region == this.RegionActiva)? 'btn btn-primary': 'btn btn-outline-primary'
  }
  

  activarRegion(region:string){
    if(region===this.RegionActiva){ return;}
    
    this.RegionActiva = region;
    this.paises = []

    

   
    
    this.paisService.buscarRegion(this.RegionActiva).subscribe(resp => {
      this.paises = resp
    });

    //console.log(this.RegionActiva)
  }

  constructor(private paisService:PaisService) { }

  

}
