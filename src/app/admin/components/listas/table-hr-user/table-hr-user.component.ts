import { HrUserService } from './../../../services/s-hr-user/hr-user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-hr-user',
  templateUrl: './table-hr-user.component.html',
  styleUrls: ['./table-hr-user.component.css']
})
export class TableHrUserComponent implements OnInit {

  hrUsers: any;

  constructor(private hrUserService: HrUserService) { }

  ngOnInit(): void {
    // Después de declararla abajo, llamamos en el init
    this.listHrUser();
    console.log(this.hrUsers)
  }

  // get all
  listHrUser() {
    // llamas al service de listar y pasa la lista a la variable
    this.hrUserService.listHrUser().subscribe((hrUsers: any) => {
      this.hrUsers = hrUsers;
    });

  }


}

