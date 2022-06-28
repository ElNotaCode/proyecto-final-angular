import { HrUserService } from './../../../services/s-hr-user/hr-user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-hr-user',
  templateUrl: './table-hr-user.component.html',
  styleUrls: ['./table-hr-user.component.css'],
})
export class TableHrUserComponent implements OnInit {
  hrUsers: any;

  constructor(private hrUserService: HrUserService) {}

    //esta variable es para el edit
    isEdit = false;
    id = "";

    hrUser = {
      username: '',
    };

  ngOnInit(): void {
    // Después de declararla abajo, llamamos en el init
    this.listHrUser();
    console.log(this.hrUsers);
  }

  // get all
  listHrUser() {
    // llamas al service de listar y pasa la lista a la variable
    this.hrUserService.listHrUser().subscribe((hrUsers: any) => {
      this.hrUsers = hrUsers;
    });
  }

  //Delete
  deleteHrUser(id: any) {
    //TODO: Avisos estas seguro? si no
    this.hrUserService.deleteHrUser(id).subscribe((response) => {
      console.log(response);
      location.reload();
    });
  }

  preguntarDelete(id:any){
    if(confirm("Seguro que quiere eliminar al HrUser ID:" + id + "?")) {
      this.deleteHrUser(id);
    }
  }

  editHrUser(id:any, username:any){
    this.id = id;
    this.hrUser.username = username;
    this.isEdit = true;
  }

}
