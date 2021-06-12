import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl:string='https://restcountries.eu/rest/v2/'

  constructor(private http: HttpClient) { }

  get httpParams(){
    return new HttpParams().set('fields','flag;name;capital;population;alpha2Code')
  }

  buscarPais(termino:string): Observable<Pais[]>{
    
    const url = `${this.apiUrl}name/${termino}`  

    console.log(url)
    
   return this.http.get<Pais[]>(url,{params:this.httpParams});
  }

  buscarCapital(termino:string):Observable<Pais[]>{

    

    const url = `${this.apiUrl}capital/${termino}`

    return this.http.get<Pais[]>(url,{params:this.httpParams});

  }

  buscarRegion(termino:string):Observable<Pais[]>{


    const url = `${this.apiUrl}region/${termino}?fields=flag;name;capital;population;alpha2Code`

    return this.http.get<Pais[]>(url);

  }

  getPaisPorCodigo(id:string):Observable<Pais[]>{

    const url = `${this.apiUrl}alpha/${id}`

    console.log(url)

    return this.http.get<Pais[]>(url);

  }


}
