import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-skill',
  templateUrl: './form-skill.component.html',
  styleUrls: ['./form-skill.component.css'],
})
export class FormSkillComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  nombreSkill: string = '';
  validarNombre: boolean = true;

  enviarFormulario() {
    alert('Este botón no envia nada.');
  }
}
