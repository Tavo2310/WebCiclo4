import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteModel } from 'src/app/modelos/cliente.model';
import { EncomiendaModel } from 'src/app/modelos/encomienda.model';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { EncomiendaService } from 'src/app/servicios/encomienda.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2'



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private clienteService: ClienteService,
    private encomiendaService: EncomiendaService,) { }

  
  fgValidacion = this.fb.group({
    origen: ['', [Validators.required]],
    destino: ['', [Validators.required]],
    fecha: ['', [Validators.required]],
    hora: ['', [Validators.required]],
    encomienda: ['', [Validators.required]],
    valor: ['', [Validators.required]],

  });

  listadoClientes: ClienteModel[] = []
  listadoEncomiendas: EncomiendaModel[] = []

  ngOnInit(): void {

    this.getEncomiendas();
    this.getClientes();
  }

  getEncomiendas(){
    this.encomiendaService.getAll().subscribe((data: EncomiendaModel[]) => {
      this.listadoEncomiendas = data
      console.log(data)
    })
  }

  getClientes(){
    this.clienteService.getAll().subscribe((data: ClienteModel[]) => {
      this.listadoClientes = data
      console.log(data)
    })
  }

  store(){}

}
