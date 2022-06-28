import { Component, OnInit, Input } from '@angular/core';
import { SkillService } from 'src/app/admin/services/s-skill/skill.service';

/**
 * @Author Eloi Martorell Martin
 */

@Component({
  selector: 'app-form-skill',
  templateUrl: './form-skill.component.html',
  styleUrls: ['./form-skill.component.css'],
})
export class FormSkillComponent implements OnInit {
  //Importante declarar el service en el parametro del constructor
  constructor(private skillService: SkillService) {}

  ngOnInit(): void {}

  //esta variable se usa para alternar entre cambiar y editar

  @Input() isEdit = false;
  @Input() id = '';

  //esta variable se usa para indicar que se ha creado la skill inicializamos en FALSE
  isSkillAdded = false;

  //objeto de la tabla
  @Input() skill = {
    skill_name: '',
  };

  //esta variable indicará que se tiene que introducir un nombre válido
  validarNombre: boolean = false;

  //declaramos esta función en void
  addSkill(): void {
    let data = {
      skill_name: this.skill.skill_name,
    };
    //control
    if (!data.skill_name) {
      //mostramos el mensaje de validación
      this.validarNombre = true;
      //importante poner el return para que pare la función
      return;
    } else {
      this.skillService.createSkill(data).subscribe({
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
  newSkill() {
    //resetea el objeto y la var si está añadida
    this.isSkillAdded = false;

    this.skill = {
      skill_name: '',
    };
  }

  editSkill(){
    let data = {
      skill_name: this.skill.skill_name,
    };
    //control
    if (!data.skill_name) {
      //mostramos el mensaje de validación
      this.validarNombre = true;
      //importante poner el return para que pare la función
      return;
    } else {
      this.skillService.updateSkill(this.id,data).subscribe({
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
