import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-candidate',
  templateUrl: './form-candidate.component.html',
  styleUrls: ['./form-candidate.component.css'],
})
export class FormCandidateComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  nombre: string = '';
  apellidos: string = '';

  validarNombre: boolean = true;
  validarApellidos: boolean = true;

  enviarFormulario() {}
}
