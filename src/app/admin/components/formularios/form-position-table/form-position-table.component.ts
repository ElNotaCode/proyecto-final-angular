import { Component, OnInit, Input } from '@angular/core';
import { PositionService } from 'src/app/admin/services/s-position/position.service';

@Component({
  selector: 'app-form-position-table',
  templateUrl: './form-position-table.component.html',
  styleUrls: ['./form-position-table.component.css'],
})
export class FormPositionTableComponent implements OnInit {
  constructor(private positionService: PositionService) {}

  ngOnInit(): void {}

  //esta variable se usa para indicar que se ha creado la position inicializamos en FALSE
  isPositionAdded = false;

  //esta variable se usa para alternar entre cambiar y editar

  @Input() isEdit = false;
  @Input() id = '';

  //objeto de la tabla
  @Input() position = {
    title: '',
    description: '',
  };

  //esta variable indicará que se tiene que introducir un nombre válido

  validarTitulo: boolean = false;
  validarDescripcion: boolean = false;

  addPosition(): void {
    let data = {
      title: this.position.title,
      description: this.position.description,
    };
    //control
    if (!data.title || !data.description) {
      //mostramos el mensaje de validación

      if (!data.description) {
        this.validarDescripcion = true;
      } else {
        this.validarDescripcion = false;
      }
      if (!data.title) {
        this.validarTitulo = true;
      } else {
        this.validarTitulo = false;
      }

      //importante poner el return para que pare la función
      return;
    } else {
      this.positionService.createPosition(data).subscribe({
        next: (response) => {
          //console log para mirar si se ha mandado bien
          console.log(response);
          this.isPositionAdded = true;
        },
        error: (err) => {
          console.log(err.error.msg);
        },
      });
    }
  }

  //esta función es para el botón que se mostrará al crear una position
  newPosition() {
    //resetea el objeto y la var si está añadida
    this.isPositionAdded = false;

    this.position = {
      title: '',
      description: '',
    };
  }

  editPosition(){
    let data = {
      title: this.position.title,
      description: this.position.description,
    };
    //control
    if (!data.title || !data.description) {
      //mostramos el mensaje de validación

      if (!data.description) {
        this.validarDescripcion = true;
      } else {
        this.validarDescripcion = false;
      }
      if (!data.title) {
        this.validarTitulo = true;
      } else {
        this.validarTitulo = false;
      }

      //importante poner el return para que pare la función
      return;
    } else {
      this.positionService.updatePosition(this.id,data).subscribe({
        next: (response) => {
          //console log para mirar si se ha mandado bien
          console.log(response);
          location.reload();
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
}
