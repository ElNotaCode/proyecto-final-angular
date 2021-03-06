import { CandidateSkillService } from './../../../services/s-candidate-skill/candidate-skill.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-candidate-skill',
  templateUrl: './table-candidate-skill.component.html',
  styleUrls: ['./table-candidate-skill.component.css'],
})
export class TableCandidateSkillComponent implements OnInit {
  candidateSkills: any;

  constructor(private candidateSkillService: CandidateSkillService) {}

  ngOnInit(): void {
    // Después de declararla abajo, llamamos en el init
    this.listCandidateSkill();
  }

  // get all
  listCandidateSkill() {
    // llamas al service de listar y pasa la lista a la variable
    this.candidateSkillService
      .listCandidateSkills()
      .subscribe((candidateSkills: any) => {
        this.candidateSkills = candidateSkills;
        console.log(this.candidateSkills);
      });
  }

  //Delete
  deleteCandidateSkill(id: any) {
    //TODO: Avisos estas seguro? si no
    this.candidateSkillService
      .deleteCandidateSkill(id)
      .subscribe((response) => {
        console.log(response);
      });
  }

  preguntarDelete(id:any){
    if(confirm("Seguro que quiere eliminar la fila CandidateSkill ID:" + id + "?")) {
      this.deleteCandidateSkill(id);
    }
  }

}
