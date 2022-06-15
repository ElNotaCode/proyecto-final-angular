import { Component, OnInit } from '@angular/core';
import { PositionService } from 'src/app/admin/services/s-position/position.service';

@Component({
  selector: 'app-table-position-table',
  templateUrl: './table-position-table.component.html',
  styleUrls: ['./table-position-table.component.css']
})
export class TablePositionTableComponent implements OnInit {

  positions: any;
  constructor(private positionService: PositionService) {}

  ngOnInit(): void {
    //después de declararla abajo, la llamamos en el init
    this.listPosition();
    }

    //get all
    listPosition(){
      //Llamas al service de listar y pasa la lista a la variable
      this.positionService.listPosition().subscribe((positions:any) =>{
      this.positions = positions;
      });
    }

}
