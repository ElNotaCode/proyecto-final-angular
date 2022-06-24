import { Component, OnInit } from '@angular/core';
//importamos el servicio relacionado con el componente
import { CandidateService } from 'src/app/admin/services/s-candidate/candidate.service';

/**
 * @Author Eloi Martorell Martín
 */

@Component({
  selector: 'app-table-candidate',
  templateUrl: './table-candidate.component.html',
  styleUrls: ['./table-candidate.component.css'],
})
export class TableCandidateComponent implements OnInit {
  //Declaramos las variables que vamos a necesitar.

  candidates: any;
  currentCandidate: any;
  currentIndex = -1;
  searchName = '';

    //esta variable es para el edit
    isEdit = false;
    id = "";

    candidate = {
      candidate_name: '',
      candidate_surname: '',
    };

  //declaramos en el parametro el service
  constructor(private candidateService: CandidateService) {}

  ngOnInit(): void {
    this.listCandidates();
  }

    //Edit
    editCandidate(id:any, candidate_name :any,candidate_surname : any){
      this.id = id;
      this.candidate.candidate_name = candidate_name;
      this.candidate.candidate_surname = candidate_surname;
      this.isEdit = true;
    }

  //get all
  listCandidates() {
    //Llamas al sevice de listar y pasa la lista a la variable
    this.candidateService.listCandidates().subscribe((candidates: any) => {
      this.candidates = candidates;
    });
  }

  //Delete
  deleteCandidate(id: any) {
    //TODO: Avisos estas seguro? si no
    this.candidateService.deleteCandidate(id).subscribe((response) => {
      console.log(response);
      location.reload();
    });
  }

  //TODO: Read
}
