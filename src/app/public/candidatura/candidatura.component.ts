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
  candidate:any;
  position:any;

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


 logeo = false;
 idposition:any = 0;
 createCandidatePosition(id_position: any,name: any,apellido: any) {

  this.logeo = true;
  this.idposition = id_position;
  console.log("inscrito");
  console.log("id"+this.idposition);



  this.position = {
  id: id_position,
  title: name,
  description: apellido,
};
//inscribirse
this.candidate = {

  id: id_position,
  candidate_name: "Marc",
  candidate_surname: "Lopez",
};





  //TODO: Avisos estas seguro? si no
  console.log(id_position);
  let data = {
    /*//this.pipe.transform(Date.now(), 'dd/MM/yyyy'),
    //title: this.position.title,
    registryDate: "",
    testDate: "",
    completionDate: "0",
    result:0,
    position : this.position,
    candidate : this.candidate,*/



      "registryDate": "2022-06-28T00:00:00.000+00:00",
      "testDate": "2022-06-28T00:00:00.000+00:00",
      "completionDate": "",
      "result": '0',
      "position": {
          "id": id_position,
          "title": name,
          "description": apellido
      },
      "candidate": {
          "id": 1,
          "candidate_name": "marc",
          "candidate_surname": "lopez"

  }

  };
  console.log(data);

  //control
  if (!data) {
    //mostramos el mensaje de validación
    console.log("validacion")
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
