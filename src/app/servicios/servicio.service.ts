import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServicioModel } from '../modelos/servicio.model';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class ServicioeService {

  url = "http://localhost:3000"
  token: string = ''

  constructor(private http: HttpClient,
    private seguridadService: SeguridadService) { 
      this.token = this.seguridadService.getToken();
    }
    //Crear un usuario
    store(servicio: ServicioModel): Observable<ServicioModel> {
      return this.http.post<ServicioModel>(`${this.url}/servicios`, {
        id: servicio.id,
        origen: servicio.origen,
        destino: servicio.destino,
        fecha: servicio.fecha,
        hora: servicio.hora,
        encomienda: servicio.encomienda,
        valor: servicio.valor

      });
    }
    //Obtiene todos los clientes
    getAll(): Observable<ServicioModel[]>{
      return this.http.get<ServicioModel[]>(`${this.url}/servicios`, {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      })
    }
    //Actualiza un usuario
    update(servicio: ServicioModel): Observable<ServicioModel> {
      return this.http.patch<ServicioModel>(`${this.url}/servicios/${servicio.id}`, {
        id: servicio.id,
        origen: servicio.origen,
        destino: servicio.destino,
        fecha: servicio.fecha,
        hora: servicio.hora,
        encomienda: servicio.encomienda,
        valor: servicio.valor
      }, {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      });
    }
    //Elimina un usuario
    delete(id: string): Observable<ServicioModel[]>{
      return this.http.delete<ServicioModel[]>(`${this.url}/servicios/${id}`, {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      })
    }
    //Obtiene la informacion de un usuario
    getWithId(id: string): Observable<ServicioModel>{
      return this.http.get<ServicioModel>(`${this.url}/servicios/${id}`,{
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      })
    }

    //Obtiene la cantidad de clientes
    getCount(): Observable<ServicioModel[]>{
      return this.http.get<ServicioModel[]>(`${this.url}/servicios/count`, {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      })
    }
}