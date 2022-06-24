import { Component, OnInit } from '@angular/core';
import { PositionService } from 'src/app/admin/services/s-position/position.service';

@Component({
  selector: 'app-table-position-table',
  templateUrl: './table-position-table.component.html',
  styleUrls: ['./table-position-table.component.css'],
})
export class TablePositionTableComponent implements OnInit {
  positions: any;
  constructor(private positionService: PositionService) {}

  ngOnInit(): void {
    //después de declararla abajo, la llamamos en el init
    this.listPosition();
  }

  //esta variable es para el edit
  isEdit = false;
  id = "";

  //objeto de la tabla
  position = {
    title: '',
    description: '',
  };

    //Edit
    editPosition(id:any, title :any, description:any){
      this.id = id;

      this.position.title = title;
      this.position.description = description;

      this.isEdit = true;
    }

  //get all
  listPosition() {
    //Llamas al service de listar y pasa la lista a la variable
    this.positionService.listPosition().subscribe((positions: any) => {
      this.positions = positions;
    });
  }

  //Delete
  deletePosition(id: any) {
    //TODO: Avisos estas seguro? si no
    this.positionService.deletePosition(id).subscribe((response) => {
      console.log(response);
      location.reload();
    });
  }
}
