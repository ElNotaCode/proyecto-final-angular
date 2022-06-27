import { Component, OnInit } from '@angular/core';
import { CandidateService } from 'src/app/admin/services/s-candidate/candidate.service';
import { PositionService } from 'src/app/admin/services/s-position/position.service';

@Component({
  selector: 'app-form-candidate-position',
  templateUrl: './form-candidate-position.component.html',
  styleUrls: ['./form-candidate-position.component.css'],
})
export class FormCandidatePositionComponent implements OnInit {
  constructor(private candidateService: CandidateService,private positionService: PositionService) {}
  positions: any;
  candidates: any;

  ngOnInit(): void {
    this.listCandidates();
    this.listPosition();


  }

  fkCandidate: any;
  fkPosition: any;

  validarFkCandidate: boolean = false;
  validarFkPosition: boolean = false;

  //get all
  listCandidates() {
    //Llamas al sevice de listar y pasa la lista a la variable
    this.candidateService.listCandidates().subscribe((candidates: any) => {
      this.candidates = candidates;
      console.log(this.candidates)
    });
  }

  //get all
  listPosition() {
    //Llamas al service de listar y pasa la lista a la variable
    this.positionService.listPosition().subscribe((positions: any) => {
      this.positions = positions;
      console.log(this.positions)

    });
  }


  enviarFormulario() {}
}
