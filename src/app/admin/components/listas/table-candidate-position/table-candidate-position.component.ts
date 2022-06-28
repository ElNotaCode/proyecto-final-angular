import { Component, OnInit } from '@angular/core';
import { CandidatePositionService } from 'src/app/admin/services/s-candidate-position/candidate-position.service';

@Component({
  selector: 'app-table-candidate-position',
  templateUrl: './table-candidate-position.component.html',
  styleUrls: ['./table-candidate-position.component.css'],
})
export class TableCandidatePositionComponent implements OnInit {
  candidatePositions: any;
  constructor(private candidatePositionService: CandidatePositionService) {}

  ngOnInit(): void {
    //después de declararla abajo, la llamamos en el init
    this.listCandidatePosition();
  }

  //get all
  listCandidatePosition() {
    //Llamas al service de listar y pasa la lista a la variable
    this.candidatePositionService
      .listCandidatePosition()
      .subscribe((candidatePositions: any) => {
        this.candidatePositions = candidatePositions;
        console.log(this.candidatePositions);
      });
  }

  //Delete
  deleteCandidatePosition(id: any) {
    //TODO: Avisos estas seguro? si no
    this.candidatePositionService
      .deleteCandidatePosition(id)
      .subscribe((response) => {
        console.log(response);
        location.reload();
      });
  }

  preguntarDelete(id:any){
    if(confirm("Seguro que quiere eliminar la fila CandidatePosition ID:" + id + "?")) {
      this.deleteCandidatePosition(id);
    }
  }

}
