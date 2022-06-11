import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-candidate-position',
  templateUrl: './form-candidate-position.component.html',
  styleUrls: ['./form-candidate-position.component.css'],
})
export class FormCandidatePositionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  fkCandidate: any;
  fkPosition: any;

  validarFkCandidate: boolean = true;
  validarFkPosition: boolean = true;

  enviarFormulario() {}
}
