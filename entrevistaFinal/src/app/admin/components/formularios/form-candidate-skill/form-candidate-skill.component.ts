import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-candidate-skill',
  templateUrl: './form-candidate-skill.component.html',
  styleUrls: ['./form-candidate-skill.component.css'],
})
export class FormCandidateSkillComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  fkCandidate: any;
  fkSkill: any;

  nota: any;
  comentario: string = '';

  validarFkCandidate: boolean = true;
  validarFkSkill: boolean = true;
  validarNota: boolean = true;
  validarComentario: boolean = true;

  enviarFormulario() {}
}
