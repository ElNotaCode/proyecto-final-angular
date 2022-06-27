import { Component, OnInit } from '@angular/core';
import { HrUserService } from 'src/app/admin/services/s-hr-user/hr-user.service';
import { PositionService } from 'src/app/admin/services/s-position/position.service';

@Component({
  selector: 'app-form-hr-position',
  templateUrl: './form-hr-position.component.html',
  styleUrls: ['./form-hr-position.component.css'],
})
export class FormHrPositionComponent implements OnInit {
  hrUsers: any;
  positions: any;


  constructor(private hrUserService: HrUserService,private positionService: PositionService) {}

  ngOnInit(): void {
    this.listHrUser();
    this.listPosition();

  }

  fkHrUser: any;
  fkPosition: any;

  validarFkHrUser: boolean = false;
  validarFkPosition: boolean = false;


     // get all
  listHrUser() {
    // llamas al service de listar y pasa la lista a la variable
    this.hrUserService.listHrUser().subscribe((hrUsers: any) => {
      this.hrUsers = hrUsers;
      console.log(this.hrUsers);

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


  enviarFormulario() {}
}
