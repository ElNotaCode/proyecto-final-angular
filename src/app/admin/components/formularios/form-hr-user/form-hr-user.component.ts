import { HrUserService } from './../../../services/s-hr-user/hr-user.service';
import { Component, OnInit, Input } from '@angular/core';

/**
 * @Author Borja Montseny
 */

@Component({
  selector: 'app-form-hr-user',
  templateUrl: './form-hr-user.component.html',
  styleUrls: ['./form-hr-user.component.css'],
})
export class FormHrUserComponent implements OnInit {
  constructor(private hrUserService: HrUserService) { }

  ngOnInit(): void { }

  username: string = '';

  //esta variable se usa para indicar que se ha creado la skill inicializamos en FALSE
  isHrUserAdded = false;

  //esta variable es para el edit
  @Input() isEdit = false;
  @Input() id = "";

  //objeto de la tabla
  @Input() hrUser = {
    username: '',
  };

  validarNombre: boolean = false;

 //declaramos esta función en void
 addHrUser(): void {
  let data = {
    username: this.hrUser.username,
  };
  //control
  if (!data.username) {
    //mostramos el mensaje de validación
    this.validarNombre = true;
    //importante poner el return para que pare la función
    return;
  } else {
    this.hrUserService.createHrUser(data).subscribe({
      next: (response) => {
        //console log para mirar si se ha mandado bien
        console.log(response);
        this.isHrUserAdded = true;
      },
      error: (err) => {
        console.log(err.error.msg);
      },
    });
  }
}

cancelar(){
  location.reload();
}

editHrUser(){
  let data = {
    username: this.hrUser.username,
  };
  //control
  if (!data.username) {
    //mostramos el mensaje de validación
    this.validarNombre = true;
    //importante poner el return para que pare la función
    return;
  } else {
    this.hrUserService.updateHrUser(this.id,data).subscribe({
      next: (response) => {
        //console log para mirar si se ha mandado bien
        console.log(response);
        alert("Candidato creado con éxito.");
        location.reload();
      },
      error: (err) => {
        console.log(err.error.msg);
      },
    });
  }
}

//esta función es para el botón que se mostrará al crear una skill
newHrUser() {
  //resetea el objeto y la var si está añadida
  this.isHrUserAdded = false;

  this.hrUser = {
    username: '',
  };
}


}
