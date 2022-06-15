import { HrPositionService } from './../../../services/s-hr-position/hr-position.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-hr-position',
  templateUrl: './table-hr-position.component.html',
  styleUrls: ['./table-hr-position.component.css']
})
export class TableHrPositionComponent implements OnInit {

  hrPositions: any;
  constructor(private hrPositionService: HrPositionService) { }

  ngOnInit(): void {
    //después de declararla abajo, la llamamos en el init
    this.listPosition();
  }

      //get all
      listPosition(){
        //Llamas al service de listar y pasa la lista a la variable
        this.hrPositionService.listHrPosition().subscribe((hrPositions:any) =>{
        this.hrPositions = hrPositions;
        console.log(this.hrPositions);
        });
      }

}
