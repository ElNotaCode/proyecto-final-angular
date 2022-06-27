import { Component, OnInit } from '@angular/core';
import { CandidatePositionService } from 'src/app/admin/services/s-candidate-position/candidate-position.service';
import { CandidateService } from 'src/app/admin/services/s-candidate/candidate.service';
import { HrPositionService } from 'src/app/admin/services/s-hr-position/hr-position.service';
import { PositionService } from 'src/app/admin/services/s-position/position.service';
import { DatePipe } from '@angular/common';


/**
 * @Author Marc Lopez Marco
 */

@Component({
  selector: 'app-candidatura',
  templateUrl: './candidatura.component.html',
  styleUrls: ['./candidatura.component.css']
})
export class CandidaturaComponent implements OnInit {
  candidatePositions: any;
  positions: any;


  today: Date = new Date();
  pipe = new DatePipe('en-US');
  todayWithPipe:any = null;

  constructor(private candidatePositionService: CandidatePositionService,

    private positionService: PositionService) { }

  ngOnInit(): void {
    this.todayWithPipe = this.pipe.transform(Date.now(), 'dd/MM/yyyy');
    this.listCandidatePosition();
    this.listPosition();
  }
  isCandidatePositionAdded = false;

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


 //get all
 listPosition() {
  //Llamas al service de listar y pasa la lista a la variable
  this.positionService.listPosition().subscribe((positions: any) => {
    this.positions = positions;
    console.log(this.positions);

  });
}

//inscribirse
candidate = {
  candidate_name: "marc",
  candidate_surname: 'lopez',
};

position = {
  title: 'java',
  description: 'crud java',
};

 //Delete
 createCandidatePosition(id_position: any) {
  //TODO: Avisos estas seguro? si no
  console.log(id_position);
  let data = {
    //title: this.position.title,
    registryDate: this.pipe.transform(Date.now(), 'dd/MM/yyyy'),
    testDate: this.pipe.transform(Date.now()+10, 'dd/MM/yyyy'),
    completionDate: 0,
    result:0,
    FK_ID_POSITION: id_position,
    title: this.position.title,
    description: this.position.description,
    FK_ID_CANDIDATE : 1,
    candidate_name: this.candidate.candidate_name,
    candidate_surname: this.candidate.candidate_surname


  };
  console.log(data);

  //control
  if (id_position) {
    //mostramos el mensaje de validación
    //importante poner el return para que pare la función
    return;
  } else {
    this.candidatePositionService.createCandidatePosition(data).subscribe({
      next: (response) => {
        //console log para mirar si se ha mandado bien
        console.log(response);
        this.isCandidatePositionAdded = true;
      },
      error: (err) => {
        console.log(err.error.msg);
      },
    });
  }
}

}
