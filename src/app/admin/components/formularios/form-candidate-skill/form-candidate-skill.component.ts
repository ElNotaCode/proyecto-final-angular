import { Component, OnInit } from '@angular/core';
import { CandidateService } from 'src/app/admin/services/s-candidate/candidate.service';
import { SkillService } from 'src/app/admin/services/s-skill/skill.service';

@Component({
  selector: 'app-form-candidate-skill',
  templateUrl: './form-candidate-skill.component.html',
  styleUrls: ['./form-candidate-skill.component.css'],
})
export class FormCandidateSkillComponent implements OnInit {

  candidates: any;
  skills: any;

  constructor(private candidateService: CandidateService,private skillService: SkillService) {}

  ngOnInit(): void {
    this.listCandidates();
    this.listSkills();


  }

  fkCandidate: any;
  fkSkill: any;

  nota: any;
  comentario: string = '';

  validarFkCandidate: boolean = false;
  validarFkSkill: boolean = false;
  validarNota: boolean = false;
  validarComentario: boolean = false;


  //get all
  listCandidates() {
    //Llamas al sevice de listar y pasa la lista a la variable
    this.candidateService.listCandidates().subscribe((candidates: any) => {
      this.candidates = candidates;
      console.log(this.candidates);
    });
  }

  //get all
  listSkills() {
    //Llamas al sevice de listar y pasa la lista a la variable
    this.skillService.listSkills().subscribe((skills: any) => {
      this.skills = skills;
      console.log(this.skills);

    });
  }

  enviarFormulario() {}
}
