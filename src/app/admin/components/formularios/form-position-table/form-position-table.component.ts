import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-position-table',
  templateUrl: './form-position-table.component.html',
  styleUrls: ['./form-position-table.component.css'],
})
export class FormPositionTableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  titulo: string = '';
  descripcion: string = '';

  validarTitulo: boolean = true;
  validarDescripcion: boolean = true;

  enviarFormulario() {
    alert('Este botón no envia nada.');
  }
}
