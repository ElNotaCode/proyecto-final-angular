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

 //Delete
 createCandidatePosition(id: any) {
  //TODO: Avisos estas seguro? si no

}

}
