import { Component, OnInit } from '@angular/core';
import { CandidatePositionService } from 'src/app/admin/services/s-candidate-position/candidate-position.service';
import { CandidateService } from 'src/app/admin/services/s-candidate/candidate.service';
import { PositionService } from 'src/app/admin/services/s-position/position.service';


@Component({
  selector: 'app-form-candidate-position',
  templateUrl: './form-candidate-position.component.html',
  styleUrls: ['./form-candidate-position.component.css'],
})

/**
 * @Author Marc Lopez
 */

export class FormCandidatePositionComponent implements OnInit {

  constructor(private candidatePositionService: CandidatePositionService,private candidateService: CandidateService,private positionService: PositionService) {}

  candidates: any;
  positions: any;

  ngOnInit(): void {
    this.listCandidates();
    this.listPosition();


  }

  //esta variable se usa para indicar que se ha creado la skill inicializamos en FALSE
  isPositionCandidateAdded = false;

  //objeto de la tabla
  candidatePosition = {
    candidate_id: '',
    position_id: '',
    registryDate: '',
    completionDate:'',
    result: '',
    testDate: '',
  };

  fkCandidate: any;
  fkPosition: any;

  validarFkCandidate: boolean = false;
  validarFkPosition: boolean = false;

//esta variable indicará que se tiene que introducir un nombre válido
registryDate: boolean = false;

//declaramos esta función en void
addCandidatePosition(): void {
  let data = {
    registryDate: this.candidatePosition.registryDate,
  };
  //control
  if (!data.registryDate) {
    //mostramos el mensaje de validación
    this.registryDate = true;
    //importante poner el return para que pare la función
    return;
  } else {
    this.candidatePositionService.createCandidatePosition(data).subscribe({
      next: (response) => {
        //console log para mirar si se ha mandado bien
        console.log(response);
        this.isPositionCandidateAdded = true;
      },
      error: (err) => {
        console.log(err.error.msg);
      },
    });
  }
}


  //esta función es para el botón que se mostrará al crear una skill
  newCandidatePosition() {
    //resetea el objeto y la var si está añadida
    this.isPositionCandidateAdded = false;

    this.candidatePosition = {
      candidate_id: '',
      position_id: '',
      completionDate:'',
      registryDate: '',
      result: '',
      testDate: '',
    };
  }


  listCandidates() {
    //Llamas al sevice de listar y pasa la lista a la variable
    this.candidateService.listCandidates().subscribe((candidates: any) => {
      this.candidates = candidates;

    });
  }


    //get all
    listPosition(){
      //Llamas al service de listar y pasa la lista a la variable
      this.positionService.listPosition().subscribe((positions:any) =>{
      this.positions = positions;

      });
    }




}
