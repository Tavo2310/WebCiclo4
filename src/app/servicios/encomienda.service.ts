import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EncomiendaModel } from '../modelos/encomienda.model';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class EncomiendaService {

  url = "http://localhost:3000"
  token: string = ''

  constructor(private http: HttpClient,
    private seguridadService: SeguridadService) { 
      this.token = this.seguridadService.getToken();
    }
    //Crear un usuario
    store(encomienda: EncomiendaModel): Observable<EncomiendaModel> {
      return this.http.post<EncomiendaModel>(`${this.url}/encomiendas`, {
        id: encomienda.id,
        descripcion: encomienda.descripcion,
        peso: encomienda.peso,
        tipo: encomienda.tipo,
        presentacion: encomienda.presentacion

      });
    }
    //Obtiene todos los clientes
    getAll(): Observable<EncomiendaModel[]>{
      return this.http.get<EncomiendaModel[]>(`${this.url}/encomiendas`, {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      })
    }
    //Actualiza un usuario
    update(encomienda: EncomiendaModel): Observable<EncomiendaModel> {
      return this.http.patch<EncomiendaModel>(`${this.url}/encomiendas/${encomienda.id}`, {
        id: encomienda.id,
        descripcion: encomienda.descripcion,
        peso: encomienda.peso,
        tipo: encomienda.tipo,
        presentacion: encomienda.presentacion

      }, {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      });
    }
    //Elimina un usuario
    delete(id: string): Observable<EncomiendaModel[]>{
      return this.http.delete<EncomiendaModel[]>(`${this.url}/encomiendas/${id}`, {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      })
    }
    //Obtiene la informacion de un usuario
    getWithId(id: string): Observable<EncomiendaModel>{
      return this.http.get<EncomiendaModel>(`${this.url}/encomiendas/${id}`,{
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      })
    }

    //Obtiene la cantidad de clientes
    getCount(): Observable<EncomiendaModel[]>{
      return this.http.get<EncomiendaModel[]>(`${this.url}/encomiendas/count`, {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      })
    }
}